import React from 'react'
import { Link } from 'react-router-dom'
import SmashList from '../components/SmashList'

export default class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<br/>
				<Link to="/" className="link">Home</Link>
				<SmashList list={this.props.smashList} />
			</React.Fragment>
		)
	}
}