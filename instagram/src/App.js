import React from 'react';
import './App.css';
import dummyData from './dummy-data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instaData: dummyData,
    }
    console.log(this.state.instaData)
  }

  render() {
    return (
      <div className="App">
        {this.state.instaData.map(data =>
          <div>
            <SearchBar />
            <PostContainer dummyData={this.state.instaData} />
          </div>)}
      </div>
    );
  }
}

export default App;

const PostContainer = props => {
  return (
    <div>
      {props.dummyData.map(data =>
        <div key={data.id}>
          <p>{data.username}</p>
          <img src={data.thumbnailUrl} alt="Header" />
          <img src={data.imageUrl} alt="Post" />
          <p>{data.likes}</p>
          <CommentSection dummyData={data.comments} />
          <input />
        </div>)}
    </div>
  )
}

const CommentSection = props => {
  return (
    <div>
      {
        props.dummyData.map(comment => {
          return (
            <div key={comment.id}>
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