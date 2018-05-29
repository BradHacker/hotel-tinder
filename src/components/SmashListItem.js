import React from 'react'

export default class SmashListItem extends React.Component {
    render() {
        return (
            <div className="smashListItem">
            <img className="listImage" src={this.props.item.image} alt="Hotel"/>
                <h5>{this.props.item.name} - <small><em>{this.props.item.location}</em></small></h5>
            </div>
        )
    }
}