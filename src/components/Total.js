import React, { Component } from 'react'

export default class Total extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <p> Cart:{this.props.totCount}🛒</p>
            </div>
        )
    }
}
