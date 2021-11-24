import React from "react";
import {Link} from "react-router-dom"

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }






    render(){
        return(
            <div className="loginPage">
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
                    <Link to="/register">
                        Don't have an account? Login here!
                    </Link>
                </form>
            </div>
        );

    }

}
 
export default Login;