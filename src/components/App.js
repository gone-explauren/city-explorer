import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import React from 'react';
import axios from 'axios'; 
import './App.css'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      latitude: '',
      longitude: ''
    }
  }

  handleCityInput = (e) => {
    this.setState({
      cityName: e.target.value
    });
  }

    render() {

      return (
        <>
          <h1>Laurel Explaurel</h1>
          <Form onSubmit={this.citySubmit}>
            <Form.Label>
              <input type="text" onChange={this.handleCityInput} />
            </Form.Label>
            <Button type="submit">Explore!</Button>
          </Form>
          <Card>
            <Card.Title>{`City: ${this.state.display_name}`}</Card.Title>
            <Card.Text>{`Lat: ${this.state.latitude}`}</Card.Text>
            <Card.Text>{`Long: ${this.state.longitude}`}</Card.Text>
          </Card>
        </>
      );
    }
  }

export default App;