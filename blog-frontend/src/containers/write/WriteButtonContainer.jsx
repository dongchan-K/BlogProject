import React, { useEffect } from 'react';
import WriteButton from '../../components/write/WriteButton';
import { useSelector, useDispatch } from 'react-redux';
import { writePost, updatePost } from '../../modules/wrtie';
import { useHistory } from 'react-router-dom';

const WriteButtonContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { title, body, tags, post, postError, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      post: write.post,
      postError: write.postError,
      originalPostId: write.originalPostId,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    if (originalPostId) {
      dispatch(updatePost({ title, body, tags, id: originalPostId }));
    }
    dispatch(writePost({ title, body, tags }));
  };

  // 등록 취소
  const onCancel = () => {
    history.goBack();
  };

  // 포스트 등록 성공 또는 실패 시 작업
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);

  return (
    <WriteButton
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalPostId}
    />
  );
};

export default WriteButtonContainer;
