import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class NavBarUser extends Component {
    render() {
        return (
            <nav className='`navUser'>
                <ul>
                    <NavLink className="navLink" to="/">Home</NavLink>
                    <NavLink className="navLink" to="/posts">Posts</NavLink>
                    <NavLink className="navLink" to="/contact">Contact Us</NavLink>
                </ul>
            </nav>
        )
    }
}
