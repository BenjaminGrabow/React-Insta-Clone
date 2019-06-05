import React from 'react';
import '../../App.css';
import CommentSection from '../CommentSection/CommentSection';
import pt from 'prop-types';
import { render } from 'react-dom';

const PostContainer = props => {
  if (!props.isAuthed) {
    return <div>Sorry, I can't show you this content</div>;
  }
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
      <CommentSection comments={props.dummyData.comments} />  
    </div>
  )
}

function withAuthenticate(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuthed: false
      }
    }
    componentDidMount() {
      const isAuthed = !!localStorage.getItem('isAuthed');
      this.setState({ isAuthed });
    }

    componentDidUpdate() {
      const isAuthed = !!localStorage.getItem('isAuthed');
      if (this.state.isAuthed !== isAuthed) {
        this.setState({ isAuthed });
      }
    }

    render() {
      return(
        <Component isAuthed={this.state.isAuthed} {...this.props} />
      )
    }
  }
}

PostContainer.propTypes = {
  dummyData: pt.shape({
    username: pt.string,
    thumbnailUrl: pt.string,
    imageUrl: pt.string
  })
};


export default PostContainer;