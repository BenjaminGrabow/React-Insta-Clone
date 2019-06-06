import React from 'react';
import dummyData from './dummy-data';
import withAuthenticate from './Components/Authentication/withAuthenticate';
import PostPage from './Components/PostPage/PostPage';
import LoginPage from './Components/LoginPage/LoginPage';
import styled from 'styled-components';
import './App.css';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family  : entypo;
`;

const ComponentFromWithAuthenticate = withAuthenticate(LoginPage, PostPage);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      instaData: dummyData,
      searchInput: "",
      username: "",
      password: "",
      loggedIn: "no",
    }
  }

  componentWillMount() {
    localStorage.getItem('username') && this.setState({
      username: JSON.parse(localStorage.getItem('username'))
    })

    localStorage.getItem('password') && this.setState({
      password: JSON.parse(localStorage.getItem('password'))
    })

    localStorage.getItem('loggedIn') && this.setState({
      loggedIn: JSON.parse(localStorage.getItem('loggedIn'))
    })
  };

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
    this.setState({ password: event.target.value })
  }

  changeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  goToPostPage = () => {
    if (this.state.username.length > 5 &&
       this.state.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)) {
      this.setState({
        loggedIn: "yes"
      })
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('username', JSON.stringify(nextState.username));

    localStorage.setItem('password', JSON.stringify(nextState.password));

    localStorage.setItem('loggedIn', JSON.stringify(nextState.loggedIn));
  }

  render() {
    return (
      <Div>
        <ComponentFromWithAuthenticate
          searcherValue={this.state.searchInput}
          showTheSearchResult={this.showSearchResult}
          changeTheSeachResult={this.changeSeachResult}
          theData={this.state.instaData}
          makeALike={this.makeLike}
          thePassword={event => this.changePassword(event)}
          theUsername={event => this.changeUsername(event)}
          toPostpage={this.goToPostPage}
          loggedIn={this.state.loggedIn}
        />
      </Div>
    );
  }
}

export default App;