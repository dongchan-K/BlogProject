import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteButtonWrapper = styled.div`
  margin: 1rem 1rem 3rem 1rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

const WriteButton = ({ onCancel, onPublish, isEdit }) => {
  return (
    <WriteButtonWrapper>
      <Button cyan onClick={onPublish}>
        포스트 {isEdit ? '수정' : '등록'}
      </Button>
      <Button onClick={onCancel}>취소</Button>
    </WriteButtonWrapper>
  );
};

export default WriteButton;
