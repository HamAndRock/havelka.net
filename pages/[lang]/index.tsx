import React, { useState } from 'react';
import styled from 'styled-components';
import { GetStaticPaths, GetStaticProps } from 'next';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import { useRouter } from 'next/router';
import catalogEN from '~/locales/en/messages';
import catalogCS from '~/locales/cs/messages';
import { ArticleList } from '~/components/ArticleContainer';
import { JobsContainer } from '~/components/JobsContainer';
import { Container, Heading, Text } from '~/components/common/common';
import { Header } from '~/components/header/Header';
import { Language } from '~/typings/language';
import { Footer } from '~/components/Footer';
import { AboutContainer } from '~/components/AboutContainer';
import { SEO } from '~/components/SEO';

export default function Home({ propLang }: { propLang: Language }) {
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
                            , tak se na něj rovnou můžeš podívat.
                        </p>
                    </Text>
                </OpenSourceContainer>

                <ArticleList />

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

export const getStaticProps: GetStaticProps = async ({ params }) => ({
    props: {
        propLang: params?.lang,
    },
});

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: [
        { params: { lang: 'cs' } },
        { params: { lang: 'en' } },
    ],
    fallback: false,
});
