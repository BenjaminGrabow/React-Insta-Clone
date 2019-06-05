import React from 'react';
import PostContainer from '../PostContainer/PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import uuid from "uuid";
import '../../App.css';

const PostPage = (props) => {
        return (
                <div className="inside-app">
                        <SearchBar
          searchValue={props.searcherValue}
          showSearch={props.showTheSearchResult}
          changeSearchInput={props.changeTheSeachResult} />
        {props.theData.map(data =>
          <PostContainer dummyData={data}
            key={uuid()}
            handleLike={props.makeALike}
          />
        )}
                </div>
        )
}

export default PostPage;