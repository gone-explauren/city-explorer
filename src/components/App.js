import React from 'react';
import axios from 'axios';
import FindCityForm from './FindCityForm';
import City from './City';
import Weather from './Weather';
import Movie from './Movie';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      cityName: '',
      latitude: '',
      longitude: '',
      showMap: false,
      mapURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.latitude},${this.state.longitude}`,

      weatherData: [],
      showWeather: false,

      movieData: [],
      showMovieInfo: false,

      error: false
    }
  }


  citySubmit = async (e) => {
    e.preventDefault()
    // console.log(this.state.cityName);

    let cityURL = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}&format=json`;

    try {
      let cityData = await axios.get(cityURL);
      this.setState({
        cityData: cityData.data[0],
        cityName: cityData.data[0].display_name,
        latitude: cityData.data[0].lat,
        longitude: cityData.data[0].lon,
        showMap: true
      }, this.weatherSubmit, this.movieSubmit);


    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `We oops'd... Error: ${error.response.status}`
      });
    }
    // console.log(cityData);
  }

  weatherSubmit = async () => {

    let weatherURL = `${process.env.REACT_APP_SERVER}/weather?search=${this.state.cityName}&lat=${this.state.latitude}&lon=${this.state.longitude}`

    let weatherData = await axios.get(weatherURL)
    this.setState({
      weatherData: weatherData.data,
      showWeather: true
    })
  }

  movieSubmit = async () => {
    let movieURL = `${process.env.REACT_APP_LOCALURL}/movies?search=${this.state.cityNameInput}`;

    let movieData = await axios.get(movieURL)
    this.setState({
      movieData: movieData.data,
      showMovieInfo: true
    })
  }



  handleInput = (e) => {
    this.setState({
      cityName: e.target.value
    });
  }

  render() {

    return (
      <>
        <header>
          <h1>Laurel Explaurel</h1>
        </header>

        <main>
          <>

            <FindCityForm
              citySubmit={this.citySubmit}
              handleInput={this.handleInput}
            />

            <City
              cityData={this.state.cityData}
              cityName={this.state.cityName}
              latitude={this.state.latitude}
              longitude={this.state.longitude}
              showMap={this.state.showMap}
              mapURL={this.state.mapURL}

              citySubmit={this.citySubmit}
            />

            <Weather
              cityData={this.state.cityData}
              cityName={this.state.cityName}
              latitude={this.state.latitude}
              longitude={this.state.longitude}

              weatherData={this.state.weatherData}
              showWeather={this.state.showWeather}

              citySubmit={this.citySubmit}
              weatherSubmit={this.weatherSubmit}
            />

            <Movie
              cityData={this.state.cityData}
              cityName={this.state.cityName}

              movieData={this.state.movieData}
              showMovieInfo={this.state.showMovieInfo}

              citySubmit={this.citySubmit}
              movieSubmit={this.movieSubmit}
            />

          </>
        </main>

        <footer>
          <p>Copyrght Laurel Perkins, 2023</p>
        </footer>
      </>
    );
  }
}

export default App;