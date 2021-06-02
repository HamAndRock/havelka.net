import React from 'react';
import styled from 'styled-components';

export const Footer = () => (
    <StyledFooter>
        Copyright
        {' '}
        {new Date().getFullYear()}
        {' '}
        @ Jakub Havelka
    </StyledFooter>
);

const StyledFooter = styled.div`
  padding: 30px 0;
  grid-area: footer;
  background: #0047FF;
  color: white;
  font-weight: bold;
  text-align: center;
`;
