import React from 'react';

class Button extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            className: "show",
        }
    }

    handleClick = () => {
        this.setState({
            className: this.state.className === "show" ? "hide" : "show"
            })
            console.log(this.state)
    }


    render(){
        return(
            <>
                <img src={this.props.src} alt = {this.props.alt} className ={this.state.className} />
                <button className = {this.props.className2} onClick={this.handleClick}>{this.props.buttonText} </button>

            </>
        )

    }

}

export default Button;