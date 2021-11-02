import {
    Github, Instagram, Linkedin, Npm, Twitter,
} from 'mdi-material-ui';
import React from 'react';
import styled from 'styled-components';

export const SocialContainer = () => {
    const links = [
        {
            href: 'https://github.com/HamAndRock',
            icon: <Github width={35} height={35} fontSize="large" />,
        }, {
            href: 'https://www.linkedin.com/in/jakub-havelka/',
            icon: <Linkedin width={35} height={35} fontSize="large" />,
        }, {
            href: 'https://www.instagram.com/hafelka.j/',
            icon: <Instagram width={35} height={35} fontSize="large" />,
        }, {
            href: 'https://twitter.com/J_Havelka',
            icon: <Twitter width={35} height={35} fontSize="large" />,
        }, {
            href: 'https://www.npmjs.com/~hamandrock',
            icon: <Npm width={35} height={35} fontSize="large" />,
        },
    ];

    return (
        <StyledSocialContainer>
            {links.map((link) => (
                <Social key={link.href} target="_blank" href={link.href}>
                    {link.icon}
                </Social>
            ))}
        </StyledSocialContainer>
    );
};

const StyledSocialContainer = styled.div`
  padding-top: 60px;
  position: relative;
  z-index: 2;
  padding-bottom: 20px;
  @media (max-width: 800px) {
    display: flex;
    padding-top: 10px;
    justify-content: center;
  }
`;
const Social = styled.a`
  width: 35px;
  height: 35px;
  &:not(:last-child) {
    padding-right: 20px;
  }

  svg {
    fill: #0047FF;

    &:hover {
      fill: black;
    }
  }
`;
