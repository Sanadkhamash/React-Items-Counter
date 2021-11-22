import React, { Component } from 'react'
import CardHeading from './cardHeading'
import CardText from './textArea'
import AddToCart from './button'
import Counter from './counter'

let that;

class Card extends Component {

    constructor(props){
        super(props)
        that = this.props
        this.state={
            className :`${that.className}`
        }
    }

    handleClick2 = () =>{
        this.setState({
            className: 'hide',
        })
    }


    
    render() {
        return (
            <div className = {this.state.className}>
                <CardHeading className = {this.props.className1} heading={this.props.name} />
                <CardText className = {this.props.className2} text1 = {this.props.text} />
                <Counter 
                totalCh1={this.props.totalCh1}
                totalCh2={this.props.totalCh2}
                cntrClassName = "counter"
                />
                <AddToCart
                 src = {this.props.src}
                 alt = {this.props.alt}
                 className2 = {this.props.className3}
                 buttonText = {this.props.buttonText} />
            </div>
        )
    }
}


export default Card;