import React, { Component } from 'react';
import Container from './../Components/Container';
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
const client = new ApolloClient({
    uri: "http://localhost:8000/graphql"
});



class Home extends Component {
    findNumberofComments(comments) {
        try {
            let a = comments.split(',');
            return a.length

        } catch (error) {
            return 0
        }
    }
    componentWillMount() {
        client.query({
            query: gql`{posts{
                                        username,
                                        comments,
                                        PostID,
                                        DateAdded,
                                        caption,
                                        imageURL
                                    }
                                    }
                    `
        }).then(Res => {
            this.setState({
                posts: Res.data.posts
            })
        })
    }
    state = {
        posts: [{ username: '', caption: '', PostID: 0, imageURL: '', comments: ',' }]
    }
    render() {
        return (
            <div>
                {
                    this.state.posts.map((post, index) => {
                        return <Container key={index.toString()} username={post.username} caption={post.caption} cNumber={this.findNumberofComments(post.comments)} comments={post.comments} imageURL={post.imageURL} />
                    })
                }
            </div>
        );
    }
}




export default Home;