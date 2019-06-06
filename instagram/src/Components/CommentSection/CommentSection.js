import React, { Component } from 'react';
import uuid from "uuid";
import pt from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
display: flex;
flex-direction: column;

p {
  border: .1rem solid black;
  background-color: lightgrey;
}
input {
  width: 100%;
}

`;

class CommentSection extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        comments: props.comments,
                        addCommentInput: "",
                }
        }

        // componentWillMount() {
        //         localStorage.getItem('comments') && this.setState({
        //                 comments: JSON.parse(localStorage.getItem('comments'))
        //         })
        // }

        inputComment = (event) => {
                this.setState({
                        addCommentInput: event.target.value
                })
        };

        addTheComment = (event) => {
                const newComment = { username: localStorage.getItem("username").slice(1, -1), text: this.state.addCommentInput };

                if (event.key === "Enter") {
                        this.setState({
                                comments: [newComment].concat(this.state.comments),
                                addCommentInput: ""
                        })
                }
        }

        deleteComment = (event) => {
                const copyOfComments = this.state.comments;

                this.setState({
                        comments: copyOfComments.filter(val => val.text !== event.target.textContent)
                })
        }

        // componentWillUpdate(nextProps, nextState) {
        //         localStorage.setItem('comments', JSON.stringify(nextState.comments));
        // }

        render() {
                return (
                        <Div>
                                {this.state.comments.map(comment =>
                                        <p key={uuid()}
                                                id={uuid()}
                                                onClick={event => this.deleteComment(event)}
                                                >
                                                {comment.username}
                                                -
                                        <span>{comment.text}</span>
                                        </p>)}

                                <input className="post-input"
                                        placeholder="Add a comment..."
                                        onChange={(event) => this.inputComment(event)}
                                        key={uuid()}
                                        onKeyPress={(event) => this.addTheComment(event)}
                                        value={this.state.addCommentInput}
                                >
                                </input>
                        </Div>
                )
        }
}

CommentSection.propTypes = {
        comment: pt.shape({
                username: pt.string,
                text: pt.string,
        })
};

export default CommentSection;