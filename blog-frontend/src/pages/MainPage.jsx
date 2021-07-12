import React from 'react';
import PostList from '../components/main/PostList';
import HeaderContainer from '../containers/common/HeaderContainer';

const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostList />
    </>
  );
};

export default PostListPage;
