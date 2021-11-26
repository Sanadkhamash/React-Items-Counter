import React from "react";
import {Routes as Switch, Route} from "react-router-dom"
import UsersContainer from "./pages/usersContainer.js";
import HomeUser from "./pages/homeUser.js";
import NavBarUser from "./components/navBarUser.js";
import NavBar from './components/navBar'




//===================Pages =====================//

import Admin from "./pages/admin.js";
import Login from "./pages/login.js";
import Register  from "./pages/registration.js";
import User from "./pages/user.js";

//================== Styling ================//

import './navBar.css';




class App extends React.Component{
    constructor(props){
        super(props)
        this.cardsContent = [{
            className : 'prdCard', 
            className5 : 'flexShow',
            className1:"prdtHead", 
            name:'Product Name' ,
            className2:"cardText" ,
            text:"This is the card text" ,
            src:"https://content-images.carmax.com/qeontfmijmzv/A78D7F377690EE29698402BF33D5660278EEDB56/4b18ef116e2c5ccacd13061984ad923a/2019-ford-f-150-raptor_review_hero.jpg?fm=webp",
            alt:"fordF150",
            className3 : "cardBtn" ,
            buttonText : "Add To Cart",
        },
        {
            className : 'prdCard', 
            className1:"prdtHead", 
            name:'Product Name' ,
            className2:"cardText" ,
            text:"This is the card text" ,
            src:"https://content-images.carmax.com/qeontfmijmzv/A78D7F377690EE29698402BF33D5660278EEDB56/4b18ef116e2c5ccacd13061984ad923a/2019-ford-f-150-raptor_review_hero.jpg?fm=webp",
            alt:"fordF150",
            className3 : "cardBtn" ,
            buttonText : "Add To Cart",
        },
        {
            className : 'prdCard', 
            className1:"prdtHead", 
            name:'Product Name' ,
            className2:"cardText" ,
            text:"This is the card text" ,
            src:"https://content-images.carmax.com/qeontfmijmzv/A78D7F377690EE29698402BF33D5660278EEDB56/4b18ef116e2c5ccacd13061984ad923a/2019-ford-f-150-raptor_review_hero.jpg?fm=webp",
            alt:"fordF150",
            className3 : "cardBtn" ,
            buttonText : "Add To Cart",
        },
        {
            className : 'prdCard', 
            className1:"prdtHead", 
            name:'Product Name' ,
            className2:"cardText" ,
            text:"This is the card text" ,
            src:"https://content-images.carmax.com/qeontfmijmzv/A78D7F377690EE29698402BF33D5660278EEDB56/4b18ef116e2c5ccacd13061984ad923a/2019-ford-f-150-raptor_review_hero.jpg?fm=webp",
            alt:"fordF150",
            className3 : "cardBtn" ,
            buttonText : "Add To Cart",
        },
        {
            className : 'prdCard', 
            className1:"prdtHead", 
            name:'Product Name' ,
            className2:"cardText" ,
            text:"This is the card text" ,
            src:"https://content-images.carmax.com/qeontfmijmzv/A78D7F377690EE29698402BF33D5660278EEDB56/4b18ef116e2c5ccacd13061984ad923a/2019-ford-f-150-raptor_review_hero.jpg?fm=webp",
            alt:"fordF150",
            className3 : "cardBtn" ,
            buttonText : "Add To Cart",
        },
        {
            className : 'prdCard', 
            className1:"prdtHead", 
            name:'Product Name' ,
            className2:"cardText" ,
            text:"This is the card text" ,
            src:"https://content-images.carmax.com/qeontfmijmzv/A78D7F377690EE29698402BF33D5660278EEDB56/4b18ef116e2c5ccacd13061984ad923a/2019-ford-f-150-raptor_review_hero.jpg?fm=webp",
            alt:"fordF150",
            className3 : "cardBtn" ,
            buttonText : "Add To Cart",
        },
        {
            className : 'prdCard', 
            className1:"prdtHead", 
            name:'Product Name' ,
            className2:"cardText" ,
            text:"This is the card text" ,
            src:"https://content-images.carmax.com/qeontfmijmzv/A78D7F377690EE29698402BF33D5660278EEDB56/4b18ef116e2c5ccacd13061984ad923a/2019-ford-f-150-raptor_review_hero.jpg?fm=webp",
            alt:"fordF150",
            className3 : "cardBtn" ,
            buttonText : "Add To Cart",
        },
        {
            className : 'prdCard', 
            className1:"prdtHead", 
            name:'Product Name' ,
            className2:"cardText" ,
            text:"This is the card text" ,
            src:"https://content-images.carmax.com/qeontfmijmzv/A78D7F377690EE29698402BF33D5660278EEDB56/4b18ef116e2c5ccacd13061984ad923a/2019-ford-f-150-raptor_review_hero.jpg?fm=webp",
            alt:"fordF150",
            className3 : "cardBtn" ,
            buttonText : "Add To Cart",
        },
        {
            className : 'prdCard', 
            className1:"prdtHead", 
            name:'Product Name' ,
            className2:"cardText" ,
            text:"This is the card text" ,
            src:"https://content-images.carmax.com/qeontfmijmzv/A78D7F377690EE29698402BF33D5660278EEDB56/4b18ef116e2c5ccacd13061984ad923a/2019-ford-f-150-raptor_review_hero.jpg?fm=webp",
            alt:"fordF150",
            className3 : "cardBtn" ,
            buttonText : "Add To Cart",
        },
        ]
        this.state={
            mail:"",
            password:"",
            role:"",
            loggedin:false,
            loggedInName:""
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        let correctIndex;
        let userStorage = JSON.parse(localStorage.getItem("user"));

        userStorage.forEach((element,indx) => {
            if(this.state.mail == element.mail){
            correctIndex = indx;
            }
        });
        if(correctIndex == null){
            alert("not Found")
        }
        if(correctIndex != null  && this.state.password===userStorage[correctIndex].password) {
            this.setState({
                loggedin:true,
                role:userStorage[correctIndex].role,
                loggedInName:userStorage[correctIndex].name
            })
        }          
    }

    handleChange = (e) =>{
        if(e.target.name == "name"){
            this.setState({mail:e.target.value});
        }
        else if (e.target.name == "password"){
            this.setState({password:e.target.value});

    }
    }

    render(){
        switch (this.state.role) {
            case "Admin" : return (
                <>
                    <NavBar role={this.state.role}/>
                    <Switch>
                        <Route path="/" element={<Admin showDelete={true} />}/>;
                        <Route path="/users" element={<UsersContainer/>}/>;

                    </Switch>
                </>
                
            )
            case "user" : return(   
                <>
                    <NavBarUser/>
                    <Switch>
                        <Route path="/" element={<HomeUser />}/>
                        <Route path="/posts" element={<User role={this.state.role} userCommented = {this.state.loggedInName} />}/>
                    </Switch>
                </>
            )


            default: return (
                <Switch>
                    <Route exact path="/"  element={<Login handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>}/>
                    <Route exact path="/register" element={<Register/>} />
                </Switch>
            )

        }
 
    }
}


export default App;

