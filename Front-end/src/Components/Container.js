import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Container extends Component {
    render() {
        return (
            <center>
                <div className="MainContainer">
                    <img alt={'the image cannot be loaded...'} className="PostImage" src={this.props.imageURL} />
                    <p className="username">{this.props.username}</p>
                    <p className="caption">{this.props.caption}</p>
                    <p className="comment"><Link  to={{pathname: "/viewcomment",comments: this.props.comments}}>{this.props.cNumber} Comments (Click to Show)</Link></p>
                </div>
            </center>
        );
    }
}


export default Container;