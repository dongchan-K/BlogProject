import React from 'react';
import PostListContainer from '../containers/posts/PostListContainer';
import HeaderContainer from '../containers/common/HeaderContainer';
import PaginationContainer from '../containers/posts/PaginationContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostListPage;
