import React, { useState } from 'react';
import styled from 'styled-components';
import { GetStaticPaths, GetStaticProps } from 'next';
import { i18n } from '@lingui/core';
import axios from 'axios';
import { I18nProvider } from '@lingui/react';

import { useRouter } from 'next/router';
import catalogEN from '~/locales/en/messages';
import catalogCS from '~/locales/cs/messages';
import { JobsContainer } from '~/components/JobsContainer';
import { Container, Heading, Text } from '~/components/common/common';
import { Header } from '~/components/header/Header';
import { Language } from '~/typings/language';
import { Footer } from '~/components/Footer';
import { AboutContainer } from '~/components/AboutContainer';
import { SEO } from '~/components/SEO';
import GitHubCalendar from '~/components/github/GitHubCalendar';
import { Subheading } from '~/components/SpotifyPlayer';

export default function Home({ propLang, git }: { propLang: Language, git: any }) {
    const [lang, setLang] = useState<Language>(propLang);

    const router = useRouter();

    const changeLang = async (switchLang: Language) => {
        setLang(switchLang);
        await router.push(`/${switchLang}`);
    };

    i18n.load({
        en: catalogEN.messages,
        cs: catalogCS.messages,
    });
    i18n.activate(lang);

    return (
        <Container>

            <I18nProvider i18n={i18n}>
                <SEO />
                <Header changeLanguage={changeLang} lang={lang} />
                <AboutContainer />

                <JobsContainer />

                <OpenSourceContainer>
                    <Heading>Open Source</Heading>
                    <Text>
                        <p>
                            Vše co dělám se snažím sdílet s komunitou a tak jsem publikoval i několik npm balíčků a přispěl
                            do několika open source repozitářů, všechno se dá najít na mém osobním <a href="https://github.com/HamAndRock" target="_blank" rel="noreferrer">Githubu</a>.
                        </p>
                        <p>
                            Dokonce i tenhle web je
                            {' '}
                            <a href="https://github.com/HamAndRock/havelka.net" target="_blank" rel="noreferrer">open source</a>
                            , tak se na něj rovnou můžete podívat a případně udělat Pull Request.
                        </p>
                    </Text>

                    <Subheading>Moje Git historie</Subheading>
                    <p>Zde jsem si dovolil udělat kalendář který zaznamenává všechny moje comitty, co jsem za poslední rok udělal.
                        Je to agregace několika Gitlab a Github účtů které používám.
                    </p>
                    <CalendarContainer>
                        <GitHubCalendar data={git} blockSize={10} />
                    </CalendarContainer>
                </OpenSourceContainer>

                {/* <ArticleList /> */}

                <Footer />

            </I18nProvider>
        </Container>
    );
}

const OpenSourceContainer = styled.div`
  padding-left: 20px;
  padding-bottom: 90px;
  grid-area: os;
  @media(max-width: 800px) {
    padding-left: 0;
  }

`;

const CalendarContainer = styled.div`
  padding-top: 10px;
  article {
    overflow: hidden;
    direction: ltr;
    margin: auto;
    
    
    
    @media (max-width: 1220px) {
      max-width: calc(50vw - 150px);
      direction: rtl;
    }
    @media (max-width: 800px) {
      max-width: calc(100vw - 70px);
      & > div {
        display: flex;
        & > svg {
          margin: auto;
        }
      }
    }
  }

`;

export const getStaticProps: GetStaticProps = async ({ params }) => ({
    props: {
        propLang: params?.lang,
        git: (await axios.get('https://git.havelka.net/git')).data,
    },
    revalidate: 60 * 60,
});

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: [
        { params: { lang: 'cs' } },
        { params: { lang: 'en' } },
    ],
    fallback: false,
});
