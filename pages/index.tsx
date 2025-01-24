import React from 'react';
import styled from 'styled-components';
import { GetStaticProps } from 'next';

import { useRouter } from 'next/router';
import { JobsContainer } from '~/components/JobsContainer';
import { Container, Heading, Text } from '~/components/common/common';
import { Header } from '~/components/header/Header';
import { Language } from '~/typings/language';
import { Footer } from '~/components/Footer';
import { AboutContainer } from '~/components/AboutContainer';
import { SEO } from '~/components/SEO';

export default function Home() {
    const router = useRouter();

    const changeLang = async (switchLang: Language) => {
        await router.push('/', undefined, { locale: switchLang });
    };

    return (
        <Container>

            <SEO />
            <Header changeLanguage={changeLang} lang={router.locale as Language || 'cs'} />
            <AboutContainer />

            <JobsContainer />

            <OpenSourceContainer>
                <Heading>Open Source</Heading>
                <Text>
                    <p>
                        Vše co dělám se snažím sdílet s komunitou a tak jsem publikoval i několik npm balíčků a přispěl
                        do několika open source repozitářů, všechno se dá najít na mém osobním
                        <a href="https://github.com/HamAndRock" target="_blank" rel="noreferrer">Githubu</a>.
                    </p>
                    <p>
                        Dokonce i tenhle web je
                        {' '}
                        <a href="https://github.com/HamAndRock/havelka.net" target="_blank" rel="noreferrer">open source</a>
                        , tak se na něj rovnou můžete podívat a případně udělat Pull Request.
                    </p>
                </Text>

                {/* <ExtendedSubheading>Moje Git historie</ExtendedSubheading> */}
                {/* <TextCenter>Zde jsem si dovolil udělat kalendář který zaznamenává všechny moje aktivity, co jsem za poslední */}
                {/*    rok udělal. */}
                {/*    Je to agregace aktivit několika Gitlab a Github účtů které používám. */}
                {/* </TextCenter> */}
                {/* <CalendarContainer> */}
                {/*    <GitHubCalendar data={git} blockSize={10} /> */}
                {/* </CalendarContainer> */}
            </OpenSourceContainer>

            {/* <ArticleList /> */}

            <Footer />

        </Container>
    );
}

// const TextCenter = styled.p`
//   @media (max-width: 800px) {
//     text-align: center;
//   }
//
// `;
//
// const ExtendedSubheading = styled(Subheading)`
//   @media (max-width: 800px) {
//     padding-top: 30px;
//   }
//
// `;

const OpenSourceContainer = styled.div`
  padding-left: 20px;
  padding-bottom: 90px;
  grid-area: os;
  @media (max-width: 800px) {
    padding-left: 0;
  }

`;

// const CalendarContainer = styled.div`
//   padding-top: 10px;
//
//   article {
//     overflow: hidden;
//     direction: ltr;
//     margin: auto;
//
//
//     @media (max-width: 1220px) {
//       max-width: calc(50vw - 150px);
//       direction: rtl;
//     }
//     @media (max-width: 800px) {
//       max-width: calc(100vw - 70px);
//       & > div {
//         display: flex;
//
//         & > svg {
//           margin: auto;
//         }
//       }
//     }
//   }
//
// `;

export const getStaticProps: GetStaticProps = async () => ({
    props: {
    // git: (await axios.get('https://api.havelka.net/git')).data,
    },
    revalidate: 60 * 60,
});
