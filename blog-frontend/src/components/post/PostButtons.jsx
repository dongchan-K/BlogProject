import React, { useState } from 'react';
import styled from 'styled-components';
import useModal from '../../hooks/useModal';
import palette from '../../lib/styles/palette';
import AskRemoveModal from './AskRemoveModal';

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

const PostButtons = ({ onEdit, onRemove }) => {
  const [askModal, setAskModal] = useModal();

  const onRemoveClick = () => {
    setAskModal(true);
  };

  const onCancel = () => {
    setAskModal(false);
  };

  const onConfirm = () => {
    setAskModal(false);
    onRemove();
  };

  return (
    <>
      <PostButtonWrapper>
        <ActionButton className="button" onClick={onEdit}>
          수정
        </ActionButton>
        <ActionButton className="button" onClick={onRemoveClick}>
          삭제
        </ActionButton>
      </PostButtonWrapper>
      <AskRemoveModal
        visible={askModal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};

export default PostButtons;
