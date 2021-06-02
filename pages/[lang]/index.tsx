import React, { useState } from 'react';
import styled from 'styled-components';
import { GetStaticPaths, GetStaticProps } from 'next';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';

import { useRouter } from 'next/router';
import { ListSubheader } from '@material-ui/core';
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
import GitHubCalendar from '~/components/github/GitHubCalendar';
import { Subheading } from '~/components/SpotifyPlayer';

export default function Home({ propLang, git }: { propLang: Language }) {
    const [lang, setLang] = useState<Language>(propLang);

    console.log(git);

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

                    <Subheading>Moje Git historie</Subheading>
                    <p>Tady je pěkný kalendář který znázorňuje jak přes rok pracuji, vše co kde commitnu ať na Github, Gitlab tak se zde zobrazí</p>
                    <CalendarContainer>
                        <GitHubCalendar data={git} blockSize={10} />
                    </CalendarContainer>
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

const puppeteer = require('puppeteer');
const dayjs = require('dayjs');

const calculateGitlab = async (link, page) => {
    await page.goto(link);
    await page.waitForSelector('.contrib-calendar');
    return await page.evaluate(() => {
        const items = [];
        document.querySelectorAll('.contrib-calendar rect').forEach((item) => {
            const title = item.getAttribute('title');
            const match = title.match(/(?<count>[0-9]+) contributions<br \/><span class="gl-text-gray-300">(?<date>[a-zA-Z0-9 ,]+)<\/span>$/);
            if (match) {
                items.push({
                    count: parseInt(match.groups.count),
                    date: new Date(match.groups.date).toISOString().split('T')[0],
                });
            }
        });

        return items;
    });
};

const calculateGithub = async (link, page) => {
    await page.goto(link);
    await page.waitForSelector('.js-calendar-graph');

    return await page.evaluate(() => {
        const items = [];
        document.querySelectorAll('.js-calendar-graph rect').forEach((item) => {
            const count = item.getAttribute('data-count');
            const date = item.getAttribute('data-date');
            if (count > 0) {
                items.push({
                    count: parseInt(count),
                    date,
                });
            }
        });

        return items;
    });
};

const getEPICData = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({
        width: 1920,
        height: 180,
    });

    const profiles = [
        'hamandrock-github',
        'jakub.havelka-gitlab',
        'hamandrock-gitlab',
        'jakub.havelka1-gitlab',
    ];

    const gitData : any = {
        'hamandrock-github': await calculateGithub('https://github.com/hamandrock', page),
        'jakub.havelka-gitlab': await calculateGitlab('https://gitlab.praguelabs.com/jakub.havelka', page),
        'hamandrock-gitlab': await calculateGitlab('https://gitlab.com/HamAndRock', page),
        'jakub.havelka1-gitlab': await calculateGitlab('https://gitlab.com/jakub.havelka1', page),
    };

    // console.log(gitData['hamandrock-gitlab'])

    const lastYear = dayjs().subtract(1, 'year');
    const amount = dayjs().diff(lastYear, 'day');

    let currentDate = lastYear.clone();
    const object : any = {};

    let totalSum = 0;
    let highest = 0;

    for (let day = 0; day <= amount; day++) {
        currentDate = currentDate.add(1, 'day');

        const data : any = {};
        let sum = 0;

        profiles.forEach((name) => {
            // console.log(name)
            const item = gitData[name].find((item: any) => item.date === currentDate.format('YYYY-MM-DD'));
            if (item) {
                sum += item.count;
                data[name] = item.count;
            }
        });

        data.sum = sum;

        if (sum > highest) highest = sum;

        totalSum += sum;

        object[currentDate.format('YYYY-MM-DD')] = data;
    }

    await browser.close();

    return {
        data: object,
        sum: totalSum,
        highest,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => ({
    props: {
        propLang: params?.lang,
        git: await getEPICData(),
    },
});

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: [
        { params: { lang: 'cs' } },
        { params: { lang: 'en' } },
    ],
    fallback: false,
});
