import React from 'react';
import { Card, CardImg } from 'react-bootstrap';


class Movie extends React.Component {

	render() {

		// console.log(this.props.movieData[0])
		
		return (

			<>
				{this.props.singleMovieData.poster_path !== undefined
					&&
					<>
						<Card>
							<Card.Title>{this.props.singleMovieData.title}</Card.Title>
							<Card.Text>Released On: {this.props.singleMovieData.release_date}</Card.Text>
							<CardImg src={this.props.singleMovieData.poster_path} alt={this.props.singleMovieData.title} />
							<Card.Text>Overview: {this.props.singleMovieData.overview}</Card.Text>
						</Card>
					</>
				}
			</>
		)
	}
}

export default Movie