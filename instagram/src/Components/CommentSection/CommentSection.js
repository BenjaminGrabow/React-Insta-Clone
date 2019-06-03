import React from 'react';
import pt from 'prop-types';
import uuid from "uuid";

const CommentSection = props => {
        console.log(props.dummyData)
        return (
                <div>
                        {
                                props.dummyData.map(comment => {
                                        return (
                                                <div key={uuid()}>
                                                        <p>{comment.username}-{comment.text}</p>
                                                </div>
                                        )
                                }
                                )
                        }
                </div>
        )
}

CommentSection.propTypes = {
        comments: pt.arrayOf(pt.shape({
                username: pt.string.isRequired,
                text: pt.string.isRequired
        }).isRequired)
};

export default CommentSection;