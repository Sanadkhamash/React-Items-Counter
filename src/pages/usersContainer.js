import React, { Component } from 'react'

export default class UsersContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            users:JSON.parse(localStorage.getItem("user"))
        }
    }

    // componentDidMount=()=>{
    //     console.log(this.state.users)
    // }


    render() {
        return (
            <div className='usersContainer'>
                    <ul className='userCard'>
                        <h4> Emails</h4>
                        {this.state.users.map((user,indx)=><li key={indx}>{user.mail}</li>)}
                    </ul>
                    <ul className='userCard'>
                        <h4> First Names</h4>
                        {this.state.users.map((user,indx)=><li key={indx}>{user.name}</li>)}
                    </ul>
                    <ul className='userCard'>
                        <h4> Last Names</h4>
                        {this.state.users.map((user,indx)=><li key={indx}>{user.lastname}</li>)}
                    </ul>
                    <ul className='userCard'>
                        <h4> Passwords</h4>
                        {this.state.users.map((user,indx)=><li key={indx}>{user.password}</li>)}
                    </ul>
                    <ul className='userCard'>
                        <h4>Role</h4>
                        {this.state.users.map((user,indx)=><li key={indx}>{user.role}</li>)}
                    </ul>
            </div>
        )
    }
}
