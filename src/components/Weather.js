
import React from 'react';
import axios from 'axios';
import App from './App'


class Weather extends React.Component {

	render() {
		console.log(this.props.weatherData);
		let listItems = [];
		// console.log(this.props.weatherData.data[0].date)
		// console.log(this.props.weatherData.data[0].date)


		this.props.weatherData.forEach((idx) => {
			listItems.push(
			<ul key={idx}>
				<li>
					{idx.date}
				</li>
				<li>
					{idx.description}
				</li>
			</ul>)}, 
			 {this.state.showWeather
				?
				<Weather
					cityName={this.state.cityData.display_name}
					weatherData={this.state.weatherData}
				/>
				:
				<p>{this.state.errorMessage}</p>
			}
		);

		return (
			<>
				<h3>Forecast:</h3>
				{listItems}
			</>
		)
	}
}

export default Weather