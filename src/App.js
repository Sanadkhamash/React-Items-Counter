import React from "react";
import NavBar from "./navBar.js"
import CardsContainter from "./cardsContainter.js";
import Total from "./Total.js";
import Login1  from "./login.js";
import './navBar.css';
import {Routes as Switch, Route} from "react-router-dom"
import Home from "./home.js";
import Student from "./student.js";
import Teacher from "./teacher.js";
import Admin from "./admin.js";
import { Redirect } from "react-router-dom";

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
            total:0,
            username:"",
            password:"",
            role:"",
            loggedin:false,
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        let correctIndex;
        let userStorage = JSON.parse(localStorage.getItem("user"));

        userStorage.forEach((element,indx) => {
            if(this.state.username == element.name){
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
            })
        }          
    }

    handleChange = (e) =>{
        if(e.target.name == "name"){
            this.setState({username:e.target.value});
        }
        else if (e.target.name == "password"){
            this.setState({password:e.target.value});

    }
    }

    handleTotalSum = () =>{
        this.setState({
            total:this.state.total +1
        })
    }

    handleTotalSub = () =>{
        if(this.state.total)
        this.setState({
            total:this.state.total -1
        })
    }

    render(){
        switch (this.state.role) {
            case "Admin" : return <Admin />;
            case "Teacher" : return <Teacher />;
            case "Student" : return <Student />;

            default: return <Home handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>;

        }
 
    }
}


export default App;