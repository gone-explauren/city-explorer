import React from 'react';
import axios from 'axios';
import App from './App'

import Card from 'react-bootstrap/Card';


class Weather extends React.Component {

	render() {

		return (
			<>
				{this.state.error
					?
					<p>{this.state.errorMessage}</p>
					:
					(this.state.cityName !== undefined
						&&
						<>
							<Card>
								<Card.Title>`Three-Day Forecast for ${this.props.cityName}:`</Card.Title>
								<Card.Text>{this.props.weatherData[0].date}</Card.Text>
								<Card.Text>{this.props.weatherData[0].description}</Card.Text>
								<Card.Text>{this.props.weatherData[1].date}</Card.Text>
								<Card.Text>{this.props.weatherData[1].description}</Card.Text>
								<Card.Text>{this.props.weatherData[2].date}</Card.Text>
								<Card.Text>{this.props.weatherData[2].description}</Card.Text>
							</Card>
						</>
					)
				}
			</>
		)
	}
}

export default Weather