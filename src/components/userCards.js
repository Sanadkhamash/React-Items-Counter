import React, { Component } from 'react'

export default class UserCards extends Component {
    render() {
        return (
            <div className="homeCards">
                <h3>{this.props.name}</h3>
                <img alt="cardImg" src={this.props.url}/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
