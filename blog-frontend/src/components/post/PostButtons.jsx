import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const PostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
  .button + .button {
    margin-left: 0.5rem;
  }
`;

const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background-color: ${palette.gray[1]};
    color: ${palette.gray[7]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;

const PostButtons = ({ onEdit }) => {
  return (
    <PostButtonWrapper>
      <ActionButton className="button" onClick={onEdit}>
        수정
      </ActionButton>
      <ActionButton className="button">삭제</ActionButton>
    </PostButtonWrapper>
  );
};

export default PostButtons;
