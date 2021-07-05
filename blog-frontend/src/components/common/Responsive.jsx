import React from 'react';
import styled from 'styled-components';

const ResponsiveWrapper = styled.div`
  padding: 0 1rem;
  width: 1280px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    width: 1024px;
  }
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  // props를 사용할 수 있도록 ...rest를 통해 ResponsiveBlock에게 전달
  return <ResponsiveWrapper {...rest}>{children}</ResponsiveWrapper>;
};

export default Responsive;
