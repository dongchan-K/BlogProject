import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const WriteButtonWrapper = styled.div`
  margin: 1rem 1rem 3rem 1rem;
  /* padding-bottom: 5rem; */
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  /* & + & {
    margin-left: 0.5rem;
  } */
`;

const WriteButton = ({ onCancel, onPublish }) => {
  return (
    <WriteButtonWrapper>
      <StyledButton cyan onClick={onPublish}>
        포스트 등록
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteButtonWrapper>
  );
};

export default WriteButton;
