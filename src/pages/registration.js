import React, { Component } from 'react'

class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
              name:"",
              lastname:"",
              password:"",
              role:""
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        if(event.target.name == "name"){
            this.setState({name:event.target.value});
        }
        else if (event.target.name == "lastname"){
            this.setState({lastname:event.target.value});

        }
        else if (event.target.name == "password"){
            this.setState({password:event.target.value});
        }
        else if(event.target.name == "role"){
            this.setState({role :event.target.value})
        }
    }
  
    handleSubmit(event) {
        event.preventDefault();
        if(this.state.name && this.state.lastname && this.state.password){
            let user = {
                name: this.state.name,
                lastname: this.state.lastname,
                password:this.state.password,
                role:this.state.role
            }


            
            let userStorage = JSON.parse(localStorage.getItem("user"))

            userStorage.push(user);

            localStorage.setItem("user",JSON.stringify(userStorage))
        }

        else{alert('Please Fill all of the fields')};
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="password" name="password" value={this.state.value} onChange={this.handleChange} />
          </label> 
            <label>Role:</label>
            <select onChange={this.handleChange} name="role">
                <option></option>
                <option value="Admin">Admin</option>
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
            </select>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Register;
