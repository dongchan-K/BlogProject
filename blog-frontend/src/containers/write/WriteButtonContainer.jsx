import React, { useEffect } from 'react';
import WriteButton from '../../components/write/WriteButton';
import { useSelector, useDispatch } from 'react-redux';
import { writePost } from '../../modules/wrtie';
import { useHistory } from 'react-router';

const WriteButtonContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
  }));

  // 포스트 등록
  const onPublish = () => {
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

  return <WriteButton onPublish={onPublish} onCancel={onCancel} />;
};

export default WriteButtonContainer;
