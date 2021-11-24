import React, { Component } from 'react'
import Card from './card'

export default class CardsContainter extends Component {
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
 
    }





    render() {
       
        this.Cards = this.cardsContent.map((obj, indx) =>
         <Card 
         key={indx} 
         {...obj} 
         totalCh1={this.props.totalCh1} 
         totalCh2={this.props.totalCh2}
         />)

        return (
            <div className = {this.props.conClassName}>
                {this.Cards}
            </div>
        )
    }
}
