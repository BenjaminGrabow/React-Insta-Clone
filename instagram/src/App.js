import React from 'react';
import './App.css';
import dummyData from './dummy-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData,
    }
  }

  render() {
    return (
      <div className="App">
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
    <div key={props.dummyData.id}>
      <p>{props.dummyData.username}</p>
      <img src={props.dummyData.thumbnailUrl} alt="Header" />
      <img src={props.dummyData.imageUrl} alt="Post" />
      <p>{props.dummyData.likes}</p>
      <CommentSection dummyData={props.dummyData.comments} />
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

const SearchBar = () => {
  return (
    <div className="search-bar">
      <p>Instagram</p>
      <input placeholder="Search"></input>
    </div>
  )


}