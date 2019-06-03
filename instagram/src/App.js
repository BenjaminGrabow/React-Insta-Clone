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
      {/* <SearchBarContainer></SearchBar>
      <PostContainer></PostContainer> */}
      {/* <CommentSectionContainer/> */}
      {this.state.instaData.map(data => 
        <div>
          <PostContainer dummyData={this.state.instaData}/>
        </div>)}
     


    </div>
  );
    }
}

export default App;

const PostContainer = props => {
  return(
    <div>
    {props.dummyData.map(data => 
      <div key={data.id}>
        <p>{data.username}</p>
        <img src={data.thumbnailUrl} alt="Header"/>
        <img src={data.imageUrl} alt="Post"/>
        <p>{data.likes}</p>
        <CommentSection dummyData={data.comments} />
      </div> )}
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
      })
    }
    </div>
   
  )
}