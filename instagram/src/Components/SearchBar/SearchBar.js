import React from 'react';
import logo from '../../instagram.png';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #f6f6f6;

  div {
        display: flex;
         width: 20%;    
  }

  span {
        border-right: 0.1rem solid black;
         padding-right: 1rem;
  }

  img {
        width: 80%;
        height: 2rem;
  }

  i {
        display: flex;
  }

  p {
        margin: 1rem
  }
`;


const SearchBar = props => {
        return (
                <Header>
                        <div>
                                <span className="entypo-instagrem"></span>
                                <img src={logo} alt="insta-logo" />
                        </div>

                        <input placeholder="Search" value={props.searchValue} onKeyPress={() => props.showSearch()} onChange={event => props.changeSearchInput(event.target.value)}></input>

                        <i>
                                <p className="entypo-heart-empty header-icon"></p>
                                <p className="entypo-user header-icon"></p>
                                <p className="entypo-compass header-icon"></p>
                        </i>
                </Header>
        )
}

export default SearchBar;