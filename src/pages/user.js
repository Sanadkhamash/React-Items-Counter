import React, { Component } from 'react'
import CardsContainter from '../components/cardsContainter'



export default class User extends Component {
    
    constructor(props){
        super(props)
        this.state={
            cards : JSON.parse(localStorage.getItem("cards"),),
            
        }
    }

    handleComment =(e,num)=>{
        console.log(num)
        e.preventDefault();
        let cards = this.state.cards;
        cards[num].comments.push({
            userCommented:this.props.userCommented,
            comment:e.target.comment.value,
        })
        this.setState({
            cards:cards,
        })

        localStorage.setItem("cards",JSON.stringify(this.state.cards))
    }


    render() {
        return (
            <>           
                {!this.state.cards.length&&
                <h1>No Posts YET !! </h1>}
                <CardsContainter
                    showComment={true}
                    deleteCard={this.deleteCard}
                    cards={this.state.cards}
                    conClassName="cards_container"
                    userCommented={this.props.userCommented}
                    handleComment={this.handleComment}
                />
            </>
        )
    }
}
