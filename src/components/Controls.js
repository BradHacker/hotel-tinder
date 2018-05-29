import React from 'react'

export default class Controls extends React.Component {
	render() {
		return (
			<div className="controls">
				<button className="controls controls-smash" onClick={this.props.smash}><i className="fa fa-thumbs-up"></i></button>
				<button className="controls controls-pass" onClick={this.props.pass}><i className="fa fa-thumbs-down"></i></button>
			</div>
		)
	}
}