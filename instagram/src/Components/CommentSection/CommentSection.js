import React, { Component } from 'react';
import uuid from "uuid";
import '../../App.css';
import pt from 'prop-types';

class CommentSection extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        comments: props.comments,
                        addCommentInput: "",
                }
        }

        inputComment = (event) => {
                this.setState({
                        addCommentInput: event.target.value
                })
        };

        addTheComment = (event) => {
                const newComment = { username: "Joe Biden", text: this.state.addCommentInput };

                if (event.key === "Enter") {
                        this.setState({
                                comments: this.state.comments.concat(newComment),
                                addCommentInput: ""
                        })
                }
        }

        render() {
                return (
                        <div>
                                {this.state.comments.map(comment =>
                                        <p key={uuid()}>
                                                {comment.username}
                                                -
                                        {comment.text}
                                        </p>)}

                                <input className="post-input"
                                        placeholder="Add a comment..."
                                        onChange={(event) => this.inputComment(event)}
                                        key={uuid()}
                                        onKeyPress={(event) => this.addTheComment(event)}
                                        value={this.state.addCommentInput}
                                >
                                </input>
                        </div>
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