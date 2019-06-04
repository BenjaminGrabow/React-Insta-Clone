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
      addCommentInput: "",
      searchInput: "",
    }
  }

  inputComment = (input) => {
    this.setState({
      addCommentInput: input
    })
  };

  addTheComment = (props) => {
    const copyOfArray = this.state.instaData;

    console.log(props.dummyData.comments)

    const filteredPerson = copyOfArray.filter(value => value.username === props.dummyData.username)

    
    const newComment = {username: "Joe Biden", text: this.state.addCommentInput};
    
    filteredPerson.map(value => value.comments.push(newComment));
    
    console.log(filteredPerson)
    
  }

  changeSeachResult = (input) => {
    this.setState({
      searchInput: input
    })
  };

  showSearchResult = () => {
    const copyOfArray = this.state.instaData;

    const searchedItem = copyOfArray.filter(copy => copy.username.toLocaleLowerCase().startsWith(this.state.searchInput.toLocaleLowerCase()));

    this.setState({
      instaData: searchedItem,
    })
  };

  makeLike = (props) => {
    const copyOfArray = this.state.instaData;

    const filteredCopyWithoutTarget = copyOfArray.filter(copy => copy.imageUrl !== props.dummyData.imageUrl);

    const filteredCopyWithTarget = copyOfArray.filter(copy => copy.imageUrl === props.dummyData.imageUrl);

    filteredCopyWithTarget.map(value => value.likes += 1);

    const result = filteredCopyWithoutTarget.concat(filteredCopyWithTarget);

    this.setState({ instaData: result })
  };

  render() {
    return (
      <div className="app">
        <SearchBar searchValue={this.state.searchInput} showSearch={this.showSearchResult} changeSearchInput={this.changeSeachResult} />
        {this.state.instaData.map(data =>
          <PostContainer dummyData={data}
            key={uuid()}
            handleLike={this.makeLike}
          commentChange={event => this.inputComment(event.target.value)}
          addComment={this.addTheComment}
          />
        )}
      </div>
    );
  }
}

export default App;