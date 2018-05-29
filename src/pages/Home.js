import React from 'react'
import { Link } from 'react-router-dom'
import Hotel from '../components/Hotel'
import Controls from '../components/Controls'

export default class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h1>Hotel Smash Or Pass</h1>
				{ this.props.hotel ? <Hotel hotel={this.props.hotel} /> : <p>No Hotels Found</p>}
				<Controls smash={this.props.smash} pass={this.props.pass} />
				<br/>
				<br/>
				<Link to="/smashlist" className="link">Smash List</Link>
			</React.Fragment>
		)
	}
}