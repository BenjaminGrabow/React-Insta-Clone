import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PropTypes from 'prop-types';
import logo from './instagram.png';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData,
    }
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        {this.state.instaData.map(data =>
          <PostContainer dummyData={data} />
        )}
      </div>
    );
  }
}

export default App;

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

const CommentSection = props => {
  return (
    <div>
      {
        props.dummyData.map(comment => {
          return (
            <div>
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
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

const SearchBar = () => {
  return (
    <div className="search-bar">
           <div className="left-header"> 
        <p className="entypo-instagrem"></p>
      <img className="insta-picture" src={logo} alt="insta-logo" />
      </div>
      
      <input placeholder="Search"></input>
     
      <div className="right-header">
      <p className="entypo-heart-empty header-icon"></p>
      <p className="entypo-user header-icon"></p>
      <p className="entypo-compass header-icon"></p>
      </div>
    </div>
  )
}