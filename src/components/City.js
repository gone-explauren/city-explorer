import React from 'react';
import axios from 'axios';
import App from './App'

import { Card, CardImg } from 'react-bootstrap';


class City extends React.Component {
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
								<Card.Title>{`City: ${this.props.cityName}`}</Card.Title>
								<Card.Text>{`Lat: ${this.props.latitude}`}</Card.Text>
								<Card.Text>{`Long: ${this.props.longitude}`}</Card.Text>

								{this.props.showMap
									&&
									<CardImg src={this.props.mapURL} alt={this.props.cityName} />
								}

							</Card>
						</>

					)
				}
			</>

		)
		
	}
}

export default City