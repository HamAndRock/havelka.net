import React from 'react';
import styled from 'styled-components';

export const Footer = () => (
    <StyledFooter>
        <div>Copyright{' '}{new Date().getFullYear()}{' '}@ Jakub Havelka</div>
        <Small>IČ: 09540067 (Plátce DPH). Podnikatel zapsaný v Živnostenském rejstříku.</Small>
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

const Small = styled.small`
  font-size: 10px;
`;
