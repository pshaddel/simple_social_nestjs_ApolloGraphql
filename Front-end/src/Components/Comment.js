import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <center>
                <div className={'CommentContainer'}>
                {this.props.content}
                </div>
            </center>

        );
    }
}

export default Comment;