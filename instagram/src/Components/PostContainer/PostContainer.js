import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import pt from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  border: .1rem solid lightgrey;
  margin: 0 auto;
  margin-top: 1rem;
  width: 50%;

  section {
    display: flex;
  }
  
  section img {
    width: 20%;
    height: 3rem;
    border-radius: 50%;
  }

  span {
    margin: 1rem;
  }

  img {
    height: 20rem;
    width: 100%;
  }

  div {
    display: flex;
  justify-content: space-between;
  }

  i {
    display: flex;
  }

  p {
    margin: 1rem;
  }
`;


const PostContainer = props => {
  return (
    <Div>
      <section>
        <img src={props.dummyData.thumbnailUrl} alt="Thumbnail" />
        <span>{props.dummyData.username}</span>
      </section>
      <img src={props.dummyData.imageUrl} alt="Post" />
      <div>
        <i>
          <p className="entypo-heart-empty" onClick={() => props.handleLike(props)}></p>
          <p className="entypo-comment"></p>
        </i>
        <div>
          <p className="entypo-bookmark"></p>
        </div>
      </div>
      <p>{props.dummyData.likes} likes</p>
      <CommentSection comments={props.dummyData.comments} />
    </Div>
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