import { Trans } from '@lingui/react';
import React from 'react';
import styled from 'styled-components';
// @ts-ignore
import n2wordsCZ from 'n2words/lib/i18n/CZ.mjs';
import { reverse } from 'lodash';
import { capitalize } from '@material-ui/core';
import dayjs from 'dayjs';
import { Skills } from '~/components/header/Skills';
import { SpotifyPlayer } from '~/components/SpotifyPlayer';
import { Heading, Text } from '~/components/common/common';

const getYearOld = (years: number) => {
    // i will be probably dead after 100 years, so skipping hundreds calculation
    const [ones, tens] = reverse(n2wordsCZ(years).split(' '));
    if (!tens) return `${capitalize(ones)}letý`;
    return `${capitalize((ones === 'jedna' ? ones : `${ones}a`) + (tens || ''))}letý`;
};

export const AboutContainer = () => (
    <StyledAboutContainer>

        <AboutHeading><Trans message="Kdo jsem" id="about.heading" /></AboutHeading>

        <TextSkills>
            <Text>
                <p>
                    {getYearOld(dayjs().diff(dayjs('01-19-2001'), 'years'))} vývojář webových aplikací s více než pětiletou praxí. Začínal jsem v malé jičínské firmě, která se specializuje na e-shopy.
                    Odtud jsem se dostal k tvorbě fintech platformy Trisbee, což mi následně otevřelo dveře do světa reactu.
                    V současnosti pracuji v Prague Labs, kde se podílím na zakázkách pro evropské startupy, ale i klienty ze Spojených států.
                </p>

                <p>
                    S radostí můžu říct, že práce je zároveň mým koníčkem. Navštěvuji nejrůznější konference, zajímám se o novinky v oboru a stále se snažím rozšiřovat své profesní obzory.
                    Svůj volný čas ale nevěnuji pouze programování.
                    Často mám v ruce svoji zrcadlovku, se kterou jsem toho už hodně procestoval, nebo vodní dýmku, což je taková moje nezdravá vášeň.
                </p>

                <p>
                    Pokud byste se mnou rádi navázali kontakt či přímo spolupráci, určitě neváhejte napsat!
                </p>

            </Text>
            <Skills />

        </TextSkills>

        <Spotify>
            <SpotifyPlayer />
        </Spotify>
    </StyledAboutContainer>
);

const StyledAboutContainer = styled.div`
  display: grid;
  padding-top: 50px;
  grid-area: aboutSpotify;
  grid-template-columns: 4fr 4fr;
  grid-template-areas:
  "aboutHeading ."
  "text spotify";

  @media (max-width: 800px) {
    grid-template-columns: auto;
    grid-template-areas:
    "aboutHeading"
    "text"
    "spotify";
  };
`;

const TextSkills = styled.div`
  grid-area: text;

`;

const Spotify = styled.div`
  width: 100%;
  grid-area: spotify;
  padding-left: 20px;
  @media (max-width: 800px) {
    padding: 20px 0;
  }
`;

const AboutHeading = styled(Heading)`
  grid-area: aboutHeading;
`;
