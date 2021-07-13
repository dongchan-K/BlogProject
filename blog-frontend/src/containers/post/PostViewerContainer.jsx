import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { readPost, unloadPost } from '../../modules/post';
import PostViewer from '../../components/post/PostViewer';
import PostButtons from '../../components/post/PostButtons';
import { setOriginalPost } from '../../modules/wrtie';

const PostViewContainer = () => {
  // postId params 가져오기
  const { postId } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트 시 스토어에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    history.push('/write');
  };

  // 유저 아이디와 게시물을 작성한 아이디가 일치할 경우만 true
  // 초기에 user, post가 null 인 경우에 에러 방지하기 위해 논리 연산자로 user와 post가 존재할 경우에만 아이디끼리 비교할 수 있도록 함
  const ownPost = (user && user._id) === (post && post.user._id);

  return (
    <>
      <PostViewer
        post={post}
        loading={loading}
        error={error}
        actionButtons={ownPost && <PostButtons onEdit={onEdit} />}
      />
    </>
  );
};

export default PostViewContainer;
