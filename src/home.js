import React from "react";
import {Link} from "react-router-dom"

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }






    render(){
        return (
            <form className="loginForm" onSubmit={this.props.handleSubmit}>
            <label>
            Username:
            <input type="text" name="name" onChange={this.props.handleChange}/>
            </label>
                <br/>
            <label>
            Password:
            <input type="password" name="password" onChange={this.props.handleChange}/>
            </label>
            <br/>
            <input type="submit" value="Login" />
        </form>
        );

    }

}
 
export default Home;