import React, { Component } from 'react';
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
const client = new ApolloClient({
    uri: "http://localhost:8000/graphql"
});



let date = new Date();
class NewPost extends Component {
    state = {
        color: 'green',
        message: '',
        username: '',
        caption: '',
        DateAdded: date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(),
        PostID: '',
        comments: '',
        imageURL: ''
    }
    render() {
        return (
            <center>
                <p className={'Alert'} style={{ color: this.state.color }}>{this.state.message}</p>
                <table>
                    <tbody>
                        <tr><td><span className={'label'}>username</span></td><td><input placeholder={'enter your username...'} required id={'username'} onChange={this.usernameHandler.bind(this)} value={this.state.username} /></td></tr>
                        <tr><td><span className={'label'}>caption</span></td><td><input placeholder={'ex: my Hometown...'} required id={'caption'} onChange={this.captionHandler.bind(this)} value={this.state.caption} /></td></tr>
                        <tr><td><span className={'label'}>Date</span></td><td><input required id={'DateAdded'} readOnly={true} value={this.state.DateAdded} /></td></tr>
                        <tr><td><span className={'label'}>imageURL</span></td><td><input placeholder={'ex:test.r/mypc.jpg'} required id={'imageURL'} onChange={this.imageURLHandler.bind(this)} value={this.state.imageURL} /></td></tr>
                        <tr><td><span className={'label'}>PostID</span></td><td><input required placeholder={'ex:16(an Integer Number)'} id={'PostID'} onChange={this.PostIDHandler.bind(this)} value={this.state.PostID} /></td></tr>
                        <tr><td><span className={'label'}>comments</span></td><td><textarea rows={4} id={'comments'} placeholder={'seperate comments by comma : hi,next'} onChange={this.commentsHandler.bind(this)} value={this.state.comments} /></td></tr>
                        <tr><td colSpan={'2'}><div className={'SubmitBTN'} onClick={this.Submit}>Submit</div></td></tr>
                    </tbody>
                </table>
            </center>
        );
    }
    usernameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    captionHandler = (event) => {
        this.setState({ caption: event.target.value });
    }

    DateAddedHandler = (event) => {
        this.setState({ DateAdded: event.target.value });
    }

    imageURLHandler = (event) => {
        this.setState({ imageURL: event.target.value });
    }

    PostIDHandler = (event) => {
        this.setState({ PostID: event.target.value });
    }

    commentsHandler = (event) => {
        this.setState({ comments: event.target.value });
    }

    Submit = () => {
        let RequireStatus = this.CheckRequire();
        console.log(RequireStatus);
        if (RequireStatus) {
            this.setState({
                message: RequireStatus,
                color: 'red'
            })
            return null
        }
        else {
            const state = this.state;
            client.mutate({
                variables:{input:{_id:`${this.ObjectId()}`,username:`${state.username}`,comments:`${state.comments}`, caption:`${state.caption}`,PostID:34,DateAdded:`${state.DateAdded}`,imageURL:`${state.imageURL}`}},
                // variables: { input:{_id:'45645654654gdfdf',username:state.username,comments:state.comments, caption:state.caption,PostID:state.PostID,DateAdded:state.DateAdded,imageURL: state.imageURL} },
                mutation: gql`
                  mutation createPost($input: PostType!){
                    createPost(input: $input) {
                      username
                      caption
                      PostID
                      _id
                      DateAdded
                      imageURL
                    }
                  }
                `,
            }).then(Res => {
                try {
                    this.setState({
                        color:'green',
            message:'the Post has been added to DataBase Successfully. the id:'+Res.data.createPost._id,
            username: '',
            caption: '',
            DateAdded: date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate(),
            PostID: '',
            comments: '',
            imageURL: ''
                    })
                } catch (error) {
                    this.setState({
                        color:'red',
            message:'Unsuccessfull Operation. Error : '+error,
                    })
                }
                })
        }
    }
    ObjectId = (m = Math, d = Date, h = 16, s = s => m.floor(s).toString(h)) =>
        s(d.now() / 1000) + ' '.repeat(h).replace(/./g, () => s(m.random() * h))


    CheckRequire = () => {
        let { username, caption, DateAdded, PostID, comments, imageURL } = this.state;
        var ErrMessage = '';
        let params = [username, caption, DateAdded, PostID, comments, imageURL];
        let paramsName = ['username', 'caption', 'DateAdded', 'PostID', 'comments', 'imageURL'];
        var stat = false;
        params.map((InputValue, index) => {
            if (!InputValue) {
                if(stat==false)
                    ErrMessage+= 'You need to Fill'
                ErrMessage += (paramsName[index] +' , ');
                stat = true;
            }
        });
        return ErrMessage
    }

}


export default NewPost;