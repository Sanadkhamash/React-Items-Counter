import React from 'react';
import {NavLink} from 'react-router-dom'

class NavBar extends React.Component{


    render(){
        return(
            <nav>
                
                    <ul className={this.props.className}>
                        <NavLink className="navLink"  to="/">Posts</NavLink>
                        <NavLink className="navLink" to="/users">Users</NavLink>
                    </ul>


            </nav>
        )
    }
}

export default NavBar;