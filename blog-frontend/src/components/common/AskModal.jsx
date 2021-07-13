import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const FullScreen = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AskModalWrapper = styled.div`
  width: 320px;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.125);

  h2 {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
  }
`;

const StyledButton = styled(Button)`
  & + & {
    margin-left: 0.75rem;
  }
`;

const AskModal = ({
  visible,
  children,
  confirmText = '확인',
  cancelText = '취소',
  onConfirm,
  onCancel,
}) => {
  // visible 값이 false라면 모달을 보여주지 않음
  if (!visible) return null;

  return (
    <FullScreen>
      <AskModalWrapper>
        <h2>{children}</h2>
        <div className="buttons">
          <StyledButton cyan onClick={onConfirm}>
            {confirmText}
          </StyledButton>
          <StyledButton onClick={onCancel}>{cancelText}</StyledButton>
        </div>
      </AskModalWrapper>
    </FullScreen>
  );
};

export default AskModal;
