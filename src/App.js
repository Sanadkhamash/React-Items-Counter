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
import NotFound from "./pages/notFound.js";

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
            loggedInName:"",
            isLoggedIn:JSON.parse(localStorage.getItem("isLoggedIn")),
        }
    }



    handleSubmit =  async (e) =>{
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
            await this.setState({
                loggedin:true,
                role:userStorage[correctIndex].role,
                loggedInName:userStorage[correctIndex].name,
            })
           this.setState({ isLoggedIn: [this.state.loggedInName,this.state.role]})
            localStorage.setItem("isLoggedIn",JSON.stringify([this.state.loggedInName,this.state.role]));

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

    handleLogout=()=>{
        localStorage.setItem("isLoggedIn",JSON.stringify([0,0]))
        this.setState({
            isLoggedIn:[0,0],
        })
    }

    render(){
        switch (this.state.isLoggedIn[1]) {
            case "Admin" : return (
                <>
                    <NavBar handleLogout={this.handleLogout} role={this.state.role}/>
                    <Switch>
                        <Route path="/" element={<Admin showDelete={true} />}/>;
                        <Route path="/users" element={<UsersContainer/>}/>;
                        <Route path="*" element={<NotFound />}/>

                    </Switch>
                </>
            )
            case "user" : return(   
                <>
                    <NavBarUser handleLogout={this.handleLogout}/>
                    <Switch>
                        <Route path="/" element={<HomeUser />}/>
                        <Route path="/posts" element={<User role={this.state.role} userCommented = {this.state.loggedInName} />}/>
                        <Route path="*" element={<NotFound />}/>
                    </Switch>
                </>
            )
            
            
            default: return (
                <Switch>
                    <Route exact path="/"  element={<Login handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>}/>
                    <Route exact path="/register" element={<Register/>} />
                    <Route path="*" element={<NotFound />}/>
                </Switch>
            )

        }
    }
        }


export default App;

