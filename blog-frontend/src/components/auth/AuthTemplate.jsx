import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const AuthTemplateWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${palette.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    letter-spacing: 1px;
    font-family: 'CookieRunOTF-Bold';
    font-size: 1.4rem;
    color: #22b8cf;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  width: 360px;
  background-color: #fff;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateWrapper>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">gossip</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateWrapper>
  );
};

export default AuthTemplate;
