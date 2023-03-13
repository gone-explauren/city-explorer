import React from 'react';
import axios from 'axios';
import App from './App'

import { Card, CardImg } from 'react-bootstrap';


class Movie extends React.Component {

	render() {

		return (

			<Card>
				<Card.Title>{`this.state.movieData.title`}</Card.Title>
				<Card.Text>Released On: {this.state.movieData.release_date}</Card.Text>
				<CardImg src={`https://api.themoviedb.org${this.state.movieData.poster_path}`} alt={this.state.movieData.title} />
				<Card.Text>Overview: {this.state.movieData.overview}</Card.Text>
			</Card>

		)
	}
}

export default Movie