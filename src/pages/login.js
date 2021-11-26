import React from "react";
import {Link} from "react-router-dom"

class Login extends React.Component{

    render(){
        return(
            <div className="loginPage">
                <form className="loginForm" onSubmit={this.props.handleSubmit}>
                    <h3>Login</h3>
                    <h5>Enter your username and password</h5>
                    <label>
                    <p>Email Address:</p>
                    <input required type="text" name="name" onChange={this.props.handleChange}/>
                    </label>
                        <br/>
                    <label>
                    <p>Enter Password:</p>
                    <input required type="password" name="password" onChange={this.props.handleChange}/>
                    </label>
                    <br/>
                    <input type="submit" value="Login" />
                    <Link to="/register">
                        Don't have an account? Signup here!
                    </Link>
                </form>
                
            </div>


        );

    }

}
 
export default Login;