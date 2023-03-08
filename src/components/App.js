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
      showMap: false
    }
  }


  citySubmit = async (e) => {
    e.preventDefault()
    // console.log(this.state.cityName);

    let cityURL = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}&format=json`;

    let weatherURL = `${process.env.REACT_APP_SERVER}/weather?search=${this.state.cityName}`

    try {
      let cityData = await axios.get(cityURL);
      this.setState({
        cityData: cityData.data[0],
        cityName: cityData.data[0].display_name,
        latitude: cityData.data[0].lat,
        longitude: cityData.data[0].lon,
        showMap: true
      })
      let weatherData = await axios.get(weatherURL)
      this.setState({
        weatherData: weatherData.data,
        showWeather: true
      })

    } catch (error) {
      this.setState({
        error: true,
        errorMessage: `An Error Occured: ${error.response.status}`
      });
    }
    // console.log(cityData);
  }

  handleCityInput = (e) => {
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
              <Form.Control type="text" onChange={this.handleCityInput} />
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
                  <CardImg src={mapURL} alt={this.state.cityName} />
                </Card>

                {this.state.showWeather
                  ?
                  <Weather
                    cityName={this.state.cityData.display_name}
                    weatherData={this.state.weatherData}
                    error={this.state.error}
                    errorMessage={this.state.errorMessage} />
                  :
                  <p>
                    Sorry, weather is unavailable for this city.
                  </p>
                }
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