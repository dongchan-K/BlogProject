import React from 'react';
import PostListContainer from '../containers/posts/PostListContainer';
import HeaderContainer from '../containers/common/HeaderContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostListContainer />
    </>
  );
};

export default PostListPage;
