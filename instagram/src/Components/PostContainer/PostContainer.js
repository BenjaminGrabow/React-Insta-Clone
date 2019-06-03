import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import pt from 'prop-types';

const PostContainer = props => {
  return (
    <div>
      <div className="post-top">
        <img src={props.dummyData.thumbnailUrl} alt="Thumbnail" className="thumbnail" />
        <p className="username">{props.dummyData.username}</p>
      </div>
      <img src={props.dummyData.imageUrl} alt="Post" className="post-img" />
      <div className="icons">
        <div className="left-icons">
          <p className="entypo-heart-empty"></p>
          <p className="entypo-comment "></p>
        </div>
        <div className="flex-end">
          <p className="entypo-bookmark"></p>
        </div>
      </div>
      <p>{props.dummyData.likes} likes</p>
      <CommentSection dummyData={props.dummyData.comments} />
      <input className="post-input"></input>
    </div>
  )
}

PostContainer.propTypes = {
  dummyData: pt.shape({
    username: pt.string,
    thumbnailUrl: pt.string,
    imageUrl: pt.string
  })
};


export default PostContainer;