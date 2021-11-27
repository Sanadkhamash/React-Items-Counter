import React, { Component } from 'react'
import CardHeading from './cardHeading'
import CardText from './textArea'
import Image from './cardImage'


class Card extends Component {
    constructor(props){
        super(props)
        this.state={
            userCommented: this.props.cards[this.props.num].comments.map((item)=>{
                return item.userCommented;
            }),
            comments: this.props.cards[this.props.num].comments.map((item)=>{
                return item.comment;
            }),
            likesCounter:JSON.parse(localStorage.getItem('cards'))[this.props.num].likes.length,
            userDidLike : false,
        }
    }

    deleteCard =() =>{
        this.props.deleteCard(this.props.num)
    }

    handleComment =(e)=>{
        this.props.handleComment(e,this.props.num);
        this.setState({
            userCommented: this.props.cards[this.props.num].comments.map((item)=>{
                return item.userCommented;}),
            comments: this.props.cards[this.props.num].comments.map((item)=>{
                return item.comment;})
        })
    }

    componentDidMount=()=>{
        let cardsStorage = JSON.parse(localStorage.getItem("cards"));
        
        for (let user of cardsStorage[this.props.num].likes){
            if(user==this.props.userCommented)
            this.setState({userDidLike:true})
        }
    }
    
    handleLike=()=>{
        let cardsStorage = JSON.parse(localStorage.getItem("cards"));
        cardsStorage[this.props.num].likes.push(this.props.userCommented);
        localStorage.setItem("cards",JSON.stringify(cardsStorage));
        this.setState({
            userDidLike:true,
            likesCounter:this.state.likesCounter+1
        });
    }
    handleDislike=()=>{
        let cardsStorage = JSON.parse(localStorage.getItem("cards"));
        let userIndex;
        for (let i in cardsStorage[this.props.num].likes){
            if(cardsStorage[this.props.num].likes[i]==this.props.userCommented){
                userIndex = i;
            }
            cardsStorage[this.props.num].likes.splice(userIndex,1);
            localStorage.setItem("cards",JSON.stringify(cardsStorage));
            this.setState({
                userDidLike:false,
                likesCounter:this.state.likesCounter-1
            });
        }

    }


   
    render() {
        return (
            <div className = {this.props.className}>
                <p>{this.state.likesCounter} Likes this post</p>
                {!this.state.userDidLike?<p onClick={this.handleLike} className='likeBtn'>Like</p>:<p onClick={this.handleDislike} className='likeBtn'>Dislike</p>}
                <CardHeading className = {this.props.className1} heading={this.props.name} />
                <CardText className = {this.props.className2} text1 = {this.props.text} />


                <Image
                 src = {this.props.src}
                 alt = {this.props.alt}
                 className2 = {this.props.className3}
                 buttonText = {this.props.buttonText} 
                />

                 <br/>


                {/* Comments Section: Only User Can add comments */}

                 {this.props.showComment&&
                    <div className="comment">
                        <form onSubmit={this.handleComment}>
                            <h6>Add a comment</h6>
                            <textarea required name="comment"></textarea>
                            <button className='cmntBtn' type="submit">Add Comment</button>
                        </form>
                    </div>
                }
                    <div className="prevComments">
                        <h4>Comments</h4>
                        <ul className='userCommented'>
                            {this.state.userCommented.map((item,indx)=><li><p className="userName1">{item}</p><p>{this.state.comments[indx]}</p></li>)}
                        </ul>                        
                    </div>
                {/* Delete Button Showed only For admin */}

                 {this.props.showDelete&&
                 <button className="deleteBtn" onClick={this.deleteCard}>Delete Card</button>
                 }

            </div>

        )
    }
}


export default Card;