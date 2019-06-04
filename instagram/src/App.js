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
      addFriendInput: "",
      searchInput: "",
    }
  }

  // inputComment = (input) => {
  //   this.setState({
  //     addFriendInput: input
  //   })
  // }

  // addFriend = (event) => {
  //   console.log(event)
  // }

  makeLike = (props) => {
    console.log(props);

    const copyOfArray = this.state.instaData;

    const filteredCopyWithoutTarget = copyOfArray.filter(copy => copy.imageUrl !== props.dummyData.imageUrl);

    const filteredCopyWithTarget = copyOfArray.filter(copy => copy.imageUrl === props.dummyData.imageUrl);

    filteredCopyWithTarget.map(value => value.likes += 1);
    
    const  result = filteredCopyWithoutTarget.concat(filteredCopyWithTarget);

    this.setState({instaData: result})
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        {this.state.instaData.map(data =>
          <PostContainer dummyData={data}
            key={uuid()}
            handleLike={this.makeLike}
            // commentValue={this.state.addFriendInput}
            // commentChange={event => this.inputComment(event.target.value)}
            // addAFriend={(event) => this.addFriend(event)}
             />
        )}
      </div>
    );
  }
}

export default App;