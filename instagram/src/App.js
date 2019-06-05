import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import withAuthenticate from './Components/Authentication/withAuthenticate';
import PostPage from './Components/PostPage/PostPage';
import LoginPage from './Components/LoginPage/LoginPage';


const ComponentFromWithAuthenticate = withAuthenticate(LoginPage, PostPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData,
      searchInput: "",
      username: "",
      password: "",
    }
  }

  // componentWillMount() {
  //   localStorage.getItem('instaData') && this.setState({
  //     instaData: JSON.parse(localStorage.getItem('instaData'))
  //   })
  // };

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

    const indexOfTarget = copyOfArray.indexOf(props.dummyData);

    const oneLikeMore = copyOfArray[indexOfTarget].likes + 1;

    copyOfArray[indexOfTarget].likes = oneLikeMore;

    this.setState({
      instaData: copyOfArray
    })
  };

  changePassword = (event) => {
this.setState({password: event.target.value})
  }

  // componentWillUpdate(nextProps, nextState) {
  //   localStorage.setItem('instaData', JSON.stringify(nextState.instaData));
  // }

  render() {
    return (
      <div className="app">
        <ComponentFromWithAuthenticate
          searcherValue={this.state.searchInput}
          showTheSearchResult={this.showSearchResult}
          changeTheSeachResult={this.changeSeachResult}
          theData={this.state.instaData}
          makeALike={this.makeLike}
          thePassword={event => this.changePassword(event)}
          password={this.state.password} />
      </div>
    );
  }
}

export default App;