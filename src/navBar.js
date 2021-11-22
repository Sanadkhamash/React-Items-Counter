import React from 'react';

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.navList=this.props.lisY.map((item, ley) => <li key={ley}>{item}</li>)
    }

    render(){
        return(
            <nav>
                <ul className={this.props.className}>
                    {this.navList}
                </ul>
            </nav>
        )
    }
}

export default NavBar;