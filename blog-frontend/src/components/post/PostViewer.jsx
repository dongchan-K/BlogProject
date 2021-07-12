import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Reponsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';

const PostViewerWrapper = styled(Reponsive)`
  margin-top: 4rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const PostViewer = ({ post, error, loading }) => {
  // 에러처리
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewer>존재하지 않는 포스트입니다.</PostViewer>;
    }
    return <PostViewer>오류 발생</PostViewer>;
  }

  // 로딩 중이거나 아직 포스트 데이터가 없을 경우
  if (loading || !post) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = post;
  console.log(user.username);
  return (
    <PostViewerWrapper>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />

        <Tags tags={tags} />
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerWrapper>
  );
};

export default PostViewer;
