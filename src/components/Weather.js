
import React from 'react';


class Weather extends React.Component {

	render() {
		// console.log(this.props.weatherData);
		let listItems = [];
		// console.log(this.props.weatherData.data[0].date)
		// console.log(this.props.weatherData.data[0].date)

		// console.log(this.props.weatherData);
		this.props.weatherData.forEach((idx) => {
			listItems.push(
				<ul key={idx}>
					<li>
						{idx.date}
					</li>
					<li>
						{idx.description}
					</li>
				</ul>)
		}
			//  {this.props.showWeather
			// 	?
			// 	<Weather
			// 		cityName={this.state.cityData.display_name}
			// 		weatherData={this.state.weatherData}
			// 	/>
			// 	:
			// 	<p>{this.state.errorMessage}</p>
			// }
		);

		return (
			<>
				{/* optional chaining. if weatherData ever becomes not an array (if .length is undefined), optional chaining(?) will prevent this functionality from crashing */}
				{this.props.weatherData?.length !== 0
					&& <>
						<h3>Forecast:</h3>
						{listItems}
					</>
				}
			</>
		)
	}
}

export default Weather