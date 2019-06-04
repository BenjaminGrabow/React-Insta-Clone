import React from 'react';
import pt from 'prop-types';


const CommentSection = props => {
        return (
                <div>
                        <p>{props.comment.username}-{props.comment.text}</p>
                </div>
        )
}

CommentSection.propTypes = {
        comment: pt.shape({
                username: pt.string,
                text: pt.string,
        })
};

export default CommentSection;