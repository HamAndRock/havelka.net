import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { Rectangle } from '~/components/common/common';
import { SocialContainer } from '~/components/header/SocialContainer';
import { Language } from '~/typings/language';
import { Logo } from '~/components/svg/Logo';

import Kuba from '../../../public/kuba.png';

interface HeaderProps {
    lang: Language,
    changeLanguage: (lang: Language) => void
}

export const Header = ({ changeLanguage, lang }: HeaderProps) => (
    <StyledHeader>
        <Navbar>
            <Logo />
            <LanguageContainer>
                <Lang onClick={() => changeLanguage('cs')} active={lang === 'cs'}>cz</Lang>
                {/* <Lang onClick={() => changeLanguage('en')} active={lang === 'en'}>en</Lang> */}
            </LanguageContainer>
        </Navbar>
        <TitleHolder>
            <Title>Jakub Havelka</Title>
            <Subtitle>Software Engineer</Subtitle>
        </TitleHolder>
        <Contacts>
            <ContactHolder>
                <Rectangle />
                <Contact href="mailto:jakub@havelka.net">jakub@havelka.net</Contact>
            </ContactHolder>
            <ContactHolder>
                <Rectangle />
                <Contact href="tel:+420721598782">+420 721 598 782</Contact>
            </ContactHolder>
        </Contacts>
        <SocialContainer />

        <Portrait>
            <Image alt="Já" priority src={Kuba} />
        </Portrait>
    </StyledHeader>
);

const StyledHeader = styled.div`
  background: #DEE5FD;
  grid-area: header;
  border-bottom-left-radius: 100px;
  min-height: 700px;
  position: relative;
  padding: 20px 100px 0 100px;
  @media (max-width: 800px) {
    padding: 30px 15px;
    min-height: 620px;
  }

`;

const Navbar = styled.div`
  display: flex;
  padding-bottom: 100px;
  @media (max-width: 800px) {
    padding-bottom: 30px;
  }

`;

const LanguageContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const Portrait = styled.div`
  img {
    position: absolute;
    filter: drop-shadow(14px 0px 0px #C7D0F0);
    right: 0;
    bottom: 0;

    @media (max-width: 1300px) {
      width: 550px;
      height: auto;
    }

    //@media (max-width: 800px) {
    //  width: 350px;
    //  left: 0;
    //  right: unset;
    //  border-bottom-left-radius: 100px;
    //}

    @media (max-width: 800px) {
      left: 0;
      bottom: -7px;
      width: 350px;
      border-bottom-left-radius: 100px;
      right: unset;
      //clip-path: circle(123.45% at 61.73% -22.03%);
      //clip-path: polygon(58% 93%, 42% 91%, 32% 88%, 22% 83%, 13% 76%, 9% 66%, 5% 54%, 4% 43%, 3% 32%, 3% 23%, 34% 9%, 72% 10%, 93% 26%, 94% 78%, 95% 89%);
      //clip-path: polygon(45.14% 97.95%, 24.00% 97.49%, 14.29% 94.49%, 8.85% 89.51%, 5% 84.99%, 1.29% 77.15%, 0.71% 59.89%, 0.57% 45.17%, 1.29% 34.79%, 1.01% 24.24%, 1.14% -8.66%, 53.14% -9.83%, 143.57% -14.89%, 157.14% 31.53%, 157.86% 97.98%);
      clip-path: polygon(45.14% 97.95%, 24% 97.49%, 18% 95.42%, 13.14% 93.23%, 8.71% 89.64%, 5% 84.9%, 2.14% 78.79%, 0.57% 72.43%, 1.01% 24.24%, 1.14% -8.66%, 53.14% -9.83%, 143.57% -14.89%, 157.14% 31.53%, 157.86% 97.98%);

      //width: 100vw;
      //left: unset;
      //
      //
      //border-bottom-left-radius: 392px;
      //border-left: 165px solid white;
      //border-bottom: 30px solid white;
      //
      //position: absolute;
      //bottom: -40px;
    }
  }
`;
const Lang = styled.div<{ active?: boolean }>`

  cursor: pointer;

  color: ${({ active }) => (active ? '#0047FF' : 'black')};
  font-weight: ${({ active }) => (active ? 'bold' : 'unset')};
  margin: 0 5px;
  font-size: 17px;
  border-bottom: ${({ active }) => (active ? '3px solid #0047FF' : 'unset')};

`;
const TitleHolder = styled.div`

`;

const Title = styled.h1`
  font-size: 97px;
  position: relative;
  z-index: 2;

  line-height: 77px;
  @media (max-width: 800px) {
    font-size: 40px;
    line-height: 112.5%;
    text-align: center;
  }

`;
const Subtitle = styled.h2`
  color: #0047FF;
  letter-spacing: 0.2em;
  font-size: 20px;
  text-transform: uppercase;
  @media (max-width: 800px) {
    font-size: 14px;
    text-align: center;
  }

`;
const Contacts = styled.div`
  padding-top: 75px;
  @media (max-width: 800px) {
    padding-top: 20px;
  }
`;

const Contact = styled.a`
  font-size: 27px;
  font-weight: bold;
  @media (max-width: 800px) {
    font-size: 20px;
  }




`;

const ContactHolder = styled.div`
  padding-bottom: 20px;
  z-index: 2;
  transform: rotateZ(2);
  @media (max-width: 800px) {
    text-align: center;
    padding-bottom: 10px;
  }
`;
