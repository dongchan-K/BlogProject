import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0.5rem 1.4rem;
  color: #fff;
  outline: none;
  cursor: pointer;

  background-color: ${palette.gray[8]};
  &:hover {
    background-color: ${palette.gray[6]};
  }
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
