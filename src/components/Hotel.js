import React from 'react'

export default class Hotel extends React.Component {
	render() {
		let image;
		if(this.props.hotel.image) {
			image = this.props.hotel.image
		} else {
			image = "https://media.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif"
		}
		return (
			<div className="hotelCard">
				<img className="hotelImage" src={image} alt="Hotel"/>
				<h1 className="hotelName">{this.props.hotel.name}</h1>
				<p className="hotelLocation"><em>{this.props.hotel.location}</em></p>
			</div>
		)
	}
}