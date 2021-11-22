import React, { Component } from 'react'
export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state ={
            value:0,
        };
    }
    
    handleClick1 = () => {
        this.props.totalCh2();
        this.setState(initialState => ({
            value: initialState.value+1
        }));
    }
    
    handleClick2 = () => {
        if(this.state.value){
            this.props.totalCh1();
            this.setState(initialState => ({
                value: initialState.value-1
              }));
        }

    }

    render() {
        return (
            <div className = {this.props.cntrClassName}>
                <i className="fas fa-minus-circle" onClick = {this.handleClick2}></i> 
                {this.state.value}
                <i className="fas fa-plus-circle" onClick = {this.handleClick1}></i>
            </div>
        )
    }
}
