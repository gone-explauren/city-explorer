import React from 'react';
import { Form, Button } from 'react-bootstrap';


class FindCityForm extends React.Component {
	render() {

		return (

			<>
				<Form onSubmit={this.props.citySubmit} >
					<Form.Label>Find Your City!</Form.Label>
					<div>
						<Form.Control type="text" onChange={this.props.handleInput} />
						<Button type="submit">Explore!</Button>
					</div>
				</Form>
			</>

		)
	}
}

export default FindCityForm