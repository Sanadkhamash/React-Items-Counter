import React from 'react'
import {Link} from "react-router-dom";




class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
              mail:"",
              name:"",
              lastname:"",
              password:"",
              role:"user"
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        if(event.target.name === "name"){
            this.setState({name:event.target.value});
        }
        else if (event.target.name === "lastname"){
            this.setState({lastname:event.target.value});

        }
        else if (event.target.name === "password"){
            this.setState({password:event.target.value});
        }

        else if(event.target.name === "mail"){
            this.setState({mail :event.target.value})
        }
    }
  
    handleSubmit(event) {
        event.preventDefault();
        let correctIndex;
        let userStorage = JSON.parse(localStorage.getItem("user"));

        userStorage.forEach((element,indx) => {
            if(this.state.mail === element.mail){
            correctIndex = indx;
            }
        });
        if(!correctIndex){
            let user = {
                mail: this.state.mail,
                name: this.state.name,
                lastname: this.state.lastname,
                password:this.state.password,
                role:this.state.role
            }            
            let userStorage = JSON.parse(localStorage.getItem("user"))
            userStorage.push(user);
            localStorage.setItem("user",JSON.stringify(userStorage))
        }

        else{
          alert("You Already Have An Account!");
        };
    }
  
    render() {
      return (
        <div className="loginPage">
          <form className='loginForm' onSubmit={this.handleSubmit}>
            <h3>Register</h3>
            <label>
              <p>Email Address:</p>
              <input required type="text" name="mail" value={this.state.mail} onChange={this.handleChange} />
            </label>
            <label>
              <p>First Name:</p> 
              <input required type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
            <label>
              <p>Last Name:</p>
              <input required type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
            </label>
            <label>
              <p>Password:</p>
              <input required type="password" name="password" value={this.state.value} onChange={this.handleChange} />
            </label> 
            <input type="submit" value="Sign Up" />
            <Link to="/">
               Already Have an account? Sign in here!
            </Link>
          </form>
        </div>
      );
    }
  }

  export default Register;
