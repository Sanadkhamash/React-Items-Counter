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
            })
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

   
    render() {
        return (
            <div className = {this.props.className}>
                <CardHeading className = {this.props.className1} heading={this.props.name} />
                <CardText className = {this.props.className2} text1 = {this.props.text} />


                <Image
                 src = {this.props.src}
                 alt = {this.props.alt}
                 className2 = {this.props.className3}
                 buttonText = {this.props.buttonText} 
                />

                 <br/>
                {/* Delete Button Showed only For admin */}
                 {this.props.showDelete&&
                 <button className="deleteBtn" onClick={this.deleteCard}>Delete Card</button>
                 }
                {/* Comments Section: Only User Can Show and  add comments */}
                 {this.props.showComment&&
                 <>
                    <div className="comment">
                        <form onSubmit={this.handleComment}>
                            <h6>Add a comment</h6>
                            <textarea required name="comment"></textarea>
                            <button className='cmntBtn' type="submit">Add Comment</button>
                        </form>
                    </div>
                    <div className="prevComments">
                        <h4>Comments</h4>
                        <ul className='userCommented'>
                            {this.state.userCommented.map((item,indx)=><li><p className="userName1">{item}</p><p>{this.state.comments[indx]}</p></li>)}
                        </ul>                        
                    </div>
                 </>
                 }

            </div>

        )
    }
}


export default Card;