import React from 'react';
import logo from '../../instagram.png';


const SearchBar = props => {
        return (
                <div className="search-bar">
                        <div className="left-header">
                                <p className="entypo-instagrem"></p>
                                <img className="insta-picture" src={logo} alt="insta-logo" />
                        </div>

                        <input placeholder="Search" value={props.searchValue} onKeyPress={() => props.showSearch(props)} onChange={event => props.changeSearchInput(event.target.value)}></input>

                        <div className="right-header">
                                <p className="entypo-heart-empty header-icon"></p>
                                <p className="entypo-user header-icon"></p>
                                <p className="entypo-compass header-icon"></p>
                        </div>
                </div>
        )
}

export default SearchBar;