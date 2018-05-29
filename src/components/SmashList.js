import React from 'react'
import SmashListItem from './SmashListItem'

export default class SmashList extends React.Component {
	render() {
		return (
			<div>
				<h2>Smash List</h2>
				{
					this.props.list.map((hotel, i) => {
						return (
							<SmashListItem key={i} item={hotel}/>
						)
					})
				}
		</div>
		)
	}
}