import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';
import uuid from "uuid";

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
          <PostContainer dummyData={data} key={uuid()}/>
        )}
      </div>
    );
  }
}

export default App;