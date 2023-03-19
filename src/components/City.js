import React from 'react';

import { Card, CardImg } from 'react-bootstrap';


class City extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		mapURL: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.latitude},${this.props.longitude}`,
		}
	};

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
									<CardImg src={this.state.mapURL} alt={this.props.cityName} />
								}

							</Card>
						</>
					)
				}
			</>
		)
	}
}

export default City;