import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';
import Weather from './Weather';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [],
      cityName: '',
      latitude: '',
      longitude: '',
      weatherData: [],
      error: false,
      showWeather: false,
      showMap: false,
      movieData: [],
      showMovieInfo: false
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

    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.latitude},${this.state.longitude}`;
    // console.log(mapURL);

    return (
      <>
        <header>
          <h1>Laurel Explaurel</h1>
        </header>

        <main>
          <Form onSubmit={this.citySubmit}>
            <Form.Label>Find Your City!</Form.Label>
            <div>
              <Form.Control type="text" onChange={this.handleInput} />
              <Button type="submit">Explore!</Button>
            </div>
          </Form>
          {this.state.error
            ?
            <p>{this.state.errorMessage}</p>
            :
            (this.state.cityName !== undefined
              &&
              <>
                <Card>
                  <Card.Title>{`City: ${this.state.cityName}`}</Card.Title>
                  <Card.Text>{`Lat: ${this.state.latitude}`}</Card.Text>
                  <Card.Text>{`Long: ${this.state.longitude}`}</Card.Text>

                  {this.state.showMap
                    &&
                    <CardImg src={mapURL} alt={this.state.cityName} />
                  }

                </Card>

                {this.state.showWeather
                  ?
                  <Weather
                    cityName={this.state.cityData.display_name}
                    weatherData={this.state.weatherData}
                  />
                  :
                  <p>{this.state.errorMessage}</p>
                }

                <Card>
                  <Card.Title>{`this.state.movieData.title`}</Card.Title>
                  <Card.Text>Released On: {this.state.movieData.release_date}</Card.Text>
                  <Card.Img src={`https://api.themoviedb.org${this.state.movieData.poster_path}`} alt={this.state.movieData.title} />}
                  <Card.Text>Overview: {this.state.movieData.overview}</Card.Text>
                </Card>
              </>
            )
          }
        </main>

        <footer></footer>
      </>
    );
  }
}

export default App;