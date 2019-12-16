import React, { Component } from 'react';
import CommentContainer from './../Components/Comment'
class Comment extends Component {
    Creator = (comments)=>{
        try {
          return comments.split(',').map((comment,index)=><CommentContainer key={index.toString()} content={comment}/>)
        } catch (error) {
            return <div></div>
        }
    
    }
    render() {
        return (
            <center>
                <div className={'CommentTitle'}>List of Comments</div>
                {this.Creator(this.props.location.comments)}
            </center>
        );
    }
}


export default Comment;