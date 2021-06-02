import { Trans } from '@lingui/react';
import React from 'react';
import styled from 'styled-components';
import { Skills } from '~/components/header/Skills';
import { SpotifyPlayer } from '~/components/SpotifyPlayer';
import { Heading, Text } from '~/components/common/common';

export const AboutContainer = () => (
    <StyledAboutContainer>

        <AboutHeading><Trans message="O mně" id="about.heading" /></AboutHeading>

        <TextSkills>
            <Text>
                <p>
                    Jsem vývojář webového softwaru a převážně se zajímám o framework React.js a vše s ním spojené.
                </p>

                <p>
                    Již od mala se zajímám o vývoj softwaru a tak mám za sebou mnoho zkušeností. V business sféře jsem zaměstatný od 15 let a každým dnem se posouvám dále a dále.
                    Za {new Date().getFullYear() - 2015} let praxe jsem nasbíral mnoho zkušeností nejen z frontendu, backendu ale i o managementu teamu.
                </p>

                <p>
                    Programování beru jako koníček, něco co mě naplňujě a vlastně se každý den těším na to co budu zrovna programovat.
                </p>

                <p>
                    Začal jsem jako student v jedné malé firmě, kde jsem pracoval v PHP a postupně krystalozoval do dnešní formy a to Frontend developer.
                    Mám zkušenosti z Vue.js a v roce 2020 jsem přešel na React.js a už něj zůstal. Vše co dělám stavím na Next.js,
                    Styled-components a všechno mám hezky otypované v TypeScriptu.
                </p>

                <p>
                    Ve volném čase fotím na svoji zrcadlovku a poslouchám indie hudbu.
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
