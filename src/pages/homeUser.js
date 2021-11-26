import React, { Component } from 'react'
import {Link} from "react-router-dom"
import UserCards from '../components/userCards'


export default class HomeUser extends Component {
    render() {
        return (
            <div className='homeUser'>
                <div className="hero">
                    <h1>
                        Welcome {this.props.loggedInName} to my blog !!
                    </h1>
                    <h2>
                        Discover New <Link to="/posts">Posts</Link>
                    </h2>                    
                </div>
                <div className='intro'>
                    <h3>
                        Who Am I ?
                    </h3>
                    <p>
                        My name is Sanad Khamash, I was a civil engineer from the year of 2018 until 2021, on May 1st, 2021 I resigned from my previous job to enter the world of development, currently I am at Orange Coding Academy as a participent in their program (bootcamp), for any further inquiries please don't hesitate to <Link to="contact">Contact Me!</Link> !
                    </p>
                </div>
                <div className="homeProj">
                    <UserCards name="Project 1" url="https://previews.123rf.com/images/onston/onston1804/onston180400002/98971824-responsive-web-site-design-with-laptop-screen.jpg" description="This is the projects tempelate, each project added to this section will show up like this !" />
                    <UserCards name="Project 1" url="https://previews.123rf.com/images/onston/onston1804/onston180400002/98971824-responsive-web-site-design-with-laptop-screen.jpg" description="This is the projects tempelate, each project added to this section will show up like this !" />
                    <UserCards name="Project 1" url="https://previews.123rf.com/images/onston/onston1804/onston180400002/98971824-responsive-web-site-design-with-laptop-screen.jpg" description="This is the projects tempelate, each project added to this section will show up like this !" />
                </div>
            </div>
        )
    }
}
