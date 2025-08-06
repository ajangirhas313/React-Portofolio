import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem 8%;
  background-color: var(--background-color);
  text-align: center;
  border-top: 1px solid var(--surface-color);
`;

const CopyrightText = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary-color);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CopyrightText>
        Didesain & Dibangun oleh Ajang Irhas Rifai © {new Date().getFullYear()}
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;