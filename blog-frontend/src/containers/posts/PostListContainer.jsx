import React, { useEffect } from 'react';
import qs from 'qs';
import { useLocation, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import PostList from '../../components/posts/PostList';
import { listPosts } from '../../modules/main';

const PostListContainer = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { posts, error, loading, user } = useSelector(
    ({ posts, loading, user }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading['main/LIST_POSTS'],
      user: user.user,
    }),
  );

  const { username } = useParams();

  useEffect(() => {
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    dispatch(listPosts({ tag, username, page }));
  }, [dispatch, location.search]);

  return (
    <PostList
      posts={posts}
      error={error}
      loading={loading}
      showWriteButton={user}
    />
  );
};

export default PostListContainer;
