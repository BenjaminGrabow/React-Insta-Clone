import React from 'react';
import '../../App.css';
import CommentSection from '../CommentSection/CommentSection';
import pt from 'prop-types';
import uuid from "uuid";

const PostContainer = props => {
  return (
    <div className="post-container">
      <div className="post-top">
        <img src={props.dummyData.thumbnailUrl} alt="Thumbnail" className="thumbnail" />
        <p className="username">{props.dummyData.username}</p>
      </div>
      <img src={props.dummyData.imageUrl} alt="Post" className="post-img" />
      <div className="icons">
        <div className="left-icons">
          <p className="entypo-heart-empty post-icon" onClick={() => props.handleLike(props)}></p>
          <p className="entypo-comment post-icon"></p>
        </div>
        <div className="flex-end">
          <p className="entypo-bookmark post-icon"></p>
        </div>
      </div>
      <p>{props.dummyData.likes} likes</p>
      {props.dummyData.comments.map(data => 
      <CommentSection
       key={uuid()}
        comment={data} />)}
        <form>
      <input className="post-input"
       placeholder="Add a comment..."
        onChange={props.commentChange} 
        key={uuid()}
        onClick={() => props.addComment(props)}
        >
        </input>
        </form>
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