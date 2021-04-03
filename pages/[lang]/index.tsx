import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
    Github,
    Instagram,
    LanguageJava,
    LanguageJavascript,
    LanguageKotlin,
    LanguageTypescript,
    Linkedin,
    Minecraft,
    Nodejs,
    React as ReactIcon,
    Sass,
    Twitter,
    Vuejs
} from 'mdi-material-ui'
import { GetStaticPaths, GetStaticProps } from 'next';
import { i18n } from '@lingui/core';
import { I18nProvider, Trans } from '@lingui/react';

import catalogEN from '~/locales/en/messages';
import catalogCS from '~/locales/cs/messages';


interface SongData {
    songName: string,
    progress: number,
    length: number,
    artists: {
        name: string
    }[]
    images: {
        url: string
    }[]
}

export default function Home({ propLang }: { propLang: string }) {

    const [songData, setSongData] = useState<SongData>();
    const [lang, setLang] = useState<string>(propLang);

    useEffect(() => {


        //TODO clean up connection
        const webSocket = new WebSocket('wss://api.havelka.net');
        webSocket.onopen = () => {
            webSocket.onmessage = (message) => {
                let parsed = JSON.parse(message.data);
                if (parsed.message == "song") {
                    let data = parsed.data;
                    setSongData(data);
                }
            };
        };
    }, []);


    const changeLang = async (lang: string) => {
        window.history.replaceState(null, '', '/' + lang)
        setLang(lang);
    }

    i18n.load({
        en: catalogEN.messages,
        cs: catalogCS.messages,
    });
    i18n.activate(lang)

    return (
        <Container>
            <I18nProvider i18n={i18n}>
                <Header>
                    <Navbar>
                        <Logo src={'/logo.svg'} />
                        <LanguageContainer>
                            <Lang onClick={() => changeLang('cs')} active={lang === 'cs'}>cz</Lang>
                            <Lang onClick={() => changeLang('en')} active={lang === 'en'}>en</Lang>
                        </LanguageContainer>
                    </Navbar>
                    <TitleHolder>
                        <Title>Jakub Havelka</Title>
                        <Subtitle>Inovativní Software Engineer & Fotograf</Subtitle>
                    </TitleHolder>
                    <Contacts>
                        <ContactHolder>
                            <Rectangle />
                            <Contact href={'mailto:jakub@havelka.net'}>jakub@havelka.net</Contact>
                        </ContactHolder>
                        <ContactHolder>
                            <Rectangle />
                            <Contact href={'tel:+420721598782'}>+420 721 598 782</Contact>
                        </ContactHolder>
                        <ContactHolder>
                            <Rectangle />
                            <Contact>09540067 (neplátce&nbsp;DPH)</Contact>
                        </ContactHolder>
                    </Contacts>
                    <SocialContainer>
                        <Social target={'_blank'} href={'https://github.com/HamAndRock'}>
                            <Github fontSize={'large'} />
                        </Social>
                        <Social target={'_blank'} href={'https://www.linkedin.com/in/jakub-havelka/'}>
                            <Linkedin fontSize={'large'} />
                        </Social>
                        <Social target={'_blank'} href={'https://www.instagram.com/hafelka.j/'}>
                            <Instagram fontSize={'large'} />
                        </Social>
                        <Social target={'_blank'} href={'https://twitter.com/J_Havelka'}>
                            <Twitter fontSize={'large'} />
                        </Social>
                    </SocialContainer>
                    <Portrait src={'/kuba.png'} />
                </Header>
                <AboutSpotify spotifyOn={!!songData}>

                    <AboutHeading><Trans message={'O mně'} id={'about.heading'}/></AboutHeading>

                    <TextSkills>
                        <Text>
                            <p>Jsem <b>fullstack developer</b>, který přináší inovace do nynějších prehistorických
                                aplikací.</p>

                            <p>Přeměňuji svět nudných aplikacích napsaných ve starých technologií za pomocí
                                svých&nbsp;
                                <b>zkušeností</b>.</p>

                            <p>
                                Zajímám se o <b>React, TypeScript, Spring Boot, Next.js, Node.js</b> a další moderní
                                technologie a
                                jazyky, abych ze světa internových aplikací udělal lepší místo pro budoucí vývoj.
                            </p>

                            <p>
                                Taky mám fakt rád indie <b>hudbu</b> a věnuji se Fotografii, cestování a pořád se
                                učím něco
                                nového.
                            </p>

                        </Text>
                        <Skills>
                            <Skill>
                                <ReactIcon fontSize={'large'} />
                            </Skill>

                            <Skill>
                                <LanguageTypescript fontSize={'large'} />
                            </Skill>
                            <Skill>
                                <LanguageJavascript fontSize={'large'} />
                            </Skill>
                            <Skill>
                                <Nodejs fontSize={'large'} />
                            </Skill>
                            <Skill>
                                <Vuejs fontSize={'large'} />
                            </Skill>
                            <Skill>
                                <LanguageJava fontSize={'large'} />
                            </Skill>
                            <Skill>
                                <Sass fontSize={'large'} />
                            </Skill>
                            <Skill>
                                <Minecraft fontSize={'large'} />
                            </Skill>
                            <Skill>
                                <LanguageKotlin fontSize={'large'} />
                            </Skill>

                        </Skills>
                    </TextSkills>

                    <Spotify>
                        {songData && (
                            <>
                                <CurrentlyListening>Na Spotify právě poslouchám</CurrentlyListening>
                                <SpotifyContainer>
                                    <SpotifyImage width={64} height={64} src={songData.images.pop()?.url} />
                                    <SongData>
                                        <SongTitle>
                                            '{songData.songName}'&nbsp;
                                            od&nbsp;
                                            {songData.artists.map(artist => artist.name).join(' & ')}
                                        </SongTitle>
                                        <SongProgressHolder>
                                            <SongProgress style={{
                                                width: Math.floor((songData.progress / songData.length) * 100) + '%'
                                            }} />
                                        </SongProgressHolder>
                                    </SongData>
                                </SpotifyContainer>
                            </>
                        )}
                    </Spotify>
                </AboutSpotify>


                <JobsContainer>
                    <Heading>Pracovní zkušenosti</Heading>
                    <div>
                        <Job>
                            <Rectangle />
                            <div>
                                <JobTitle target={'_blank'}
                                          href={'https://www.trisbee.com/cs/CZ/obchodnik'}>Trisbee</JobTitle>&nbsp;
                                <b>&</b>&nbsp;
                                <JobTitle target={'_blank'}
                                          href={'https://www.goforboom.com/en'}>BOOM</JobTitle>
                            </div>
                            <JobDate>
                                2020 - nyní
                            </JobDate>
                            <JobDescription>
                                Jako seniorní react developer mám na starosti team juniorů. Vytvořil jsem několik core
                                aplikací pro administraci, platební PWA a navrhnul Tech stack, který používáme. Mimo
                                jiné mám na statrosti ticketing portál.
                                Vše je postaveno na Next.js, Typescriptu, StyledComponents.
                            </JobDescription>
                        </Job>
                        <Job>
                            <CRectangle />
                            <JobTitle target={'_blank'} href={'https://clouddock.cz/'}>CloudDock</JobTitle>
                            <JobDate>
                                2019 - 2021
                            </JobDate>
                            <JobDescription>
                                Společně s Jiřím Svěceným jsme založili tuto malou firmu. Tvoříme aplikaci na AWS Cloudu
                                pro tvorbu dynamických Data Storagu pro Vaše aplikace. Dělám na SPA sepsané v
                                TypeScriptu a Vue.js.
                            </JobDescription>
                        </Job>
                        <Job>
                            <CRectangle />
                            <JobTitle target={'_blank'} href={'https://shopup.cz/'}>ShopUp</JobTitle>
                            <JobDate>
                                2019 - 2020
                            </JobDate>
                            <JobDescription>
                                Pracoval jsem jako Seniorní Vue.js vývojář a když bylo potřeba pomohl jsem i s PHP na
                                backendu.
                                Měl jsem na starosti přepis celé administrace do Vue.js
                            </JobDescription>
                        </Job>
                        <Job>
                            <CRectangle />
                            <JobTitle target={'_blank'} href={'https://www.cis.cz/'}>Complete Internet
                                Services</JobTitle>
                            <JobDate>
                                2016 - 2019
                            </JobDate>
                            <JobDescription>
                                Pracoval jsem jako FullStack vývojář. Vytvořil jsem nástroj pro správu dynamické obsahu
                                webových stránek, který je vuyžíván dodnes.
                            </JobDescription>
                        </Job>
                        <Job>
                            <CRectangle />
                            <JobTitle target={'_blank'}
                                      href={'https://gatecraft.cz/-gatecraft-/-intro-page-'}>GateCraft</JobTitle>
                            <JobDate>
                                2016 - nyní
                            </JobDate>
                            <JobDescription>
                                Pracuji jako hlavní vývojář Minecraft Serveru s více než 25 vlasními pluginy, které jsem
                                přepsal a aktualizoval. Pracuji s Gradle, Java 11, Databázemi , Správou Linux Serveru a
                                často se podílím na GamePlay designu.
                            </JobDescription>
                        </Job>
                        <Job>
                            <CRectangle />
                            <JobTitle target={'_blank'} href={'https://havelka.net'}>Na volné noze</JobTitle>
                            <JobDate>
                                2014 - nyní
                            </JobDate>
                            <JobDescription>
                                Tvořím Java, Node.js, Vue.js aplikace. Používám k tomu TypeScript, Spring a mnoho
                                dalších technologií. Pořád se učím nové věci.
                            </JobDescription>
                        </Job>
                    </div>
                </JobsContainer>
                <OpenSourceContainer>
                    <Heading>Open Source</Heading>
                    <Text>
                        Vše co dělám se snažím sdílet s komunitou a tak jsem publikoval i několik npm balíčků a přispěl
                        do několika open source projektů.
                    </Text>
                </OpenSourceContainer>


                <ArticleContainer>
                    <Heading>Publikace</Heading>
                    <ArticleList>
                        <Article>
                            <ArticleImage src={'article.png'} />
                            <ArticleHeading>
                                Nedopusťme, abychom dopadli jako oni.
                            </ArticleHeading>
                            <ArticleText>
                                USA dříve závistivě hleděly na evropský způsob boje s koronavirem...
                            </ArticleText>
                        </Article>
                        <Article>
                            <ArticleImage src={'article.png'} />
                            <ArticleHeading>
                                Nedopusťme, abychom dopadli jako oni.
                            </ArticleHeading>
                            <ArticleText>
                                USA dříve závistivě hleděly na evropský způsob boje s koronavirem...
                            </ArticleText>
                        </Article>
                        <Article>
                            <ArticleImage src={'article.png'} />
                            <ArticleHeading>
                                Nedopusťme, abychom dopadli jako oni.
                            </ArticleHeading>
                            <ArticleText>
                                USA dříve závistivě hleděly na evropský způsob boje s koronavirem...
                            </ArticleText>
                        </Article>
                    </ArticleList>
                </ArticleContainer>

                <Footer>
                    Copyright {new Date().getFullYear()} @ Jakub Havelka
                </Footer>

            </I18nProvider>
        </Container>
    );
}


const OpenSourceContainer = styled.div`
  padding-left: 20px;
  grid-area: os;
  @media (max-width: 1000px) {
    padding-left: 0;
  }
`

const ArticleContainer = styled.div`
  background: #DEE5FD;
  grid-area: articles;
  border-top-right-radius: 100px;
  padding: 50px 100px 50px 100px;

  @media (max-width: 800px) {
    padding: 30px 15px;
  }
`

const ArticleList = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 800px) {
    justify-content: center;
  }


`

const AboutSpotify = styled.div<{spotifyOn: boolean}>`
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
`


const Article = styled.div`
  flex: 33%;
  max-width: 320px;
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    flex: 100%;
  }

`

const ArticleHeading = styled.a`
  display: block;
  padding: 16px 0 10px 0;
  font-weight: bold;
  font-size: 22px;
  color: #0047FF;
  @media (max-width: 800px) {
    text-align: center;
  }
`

const ArticleImage = styled.img`
  border-radius: 20px;
  @media (max-width: 800px) {
    max-width: 250px;
    margin: auto;
  }
`
const ArticleText = styled.div`
  font-size: 18px;
  @media (max-width: 800px) {
    text-align: center;
  }
`

const JobsContainer = styled.div`
  padding-bottom: 90px;
  grid-area: job;
`


const Rectangle = styled.div`
  width: 75px;
  height: 3px;
  background: #0047FF;
  position: absolute;
  transform: translateY(19px);
  left: 0;
  @media (max-width: 800px) {
    display: none;
  }
`;

const CRectangle = styled(Rectangle)`


  @media (max-width: 800px) {
    display: block;
    left: unset;
    position: unset;
    margin: 0 auto 40px auto;
    height: 45px;
    width: 3px;
  }

`

const Job = styled.div`

  &:not(:first-child) {
    padding-top: 40px;
  }

  @media (max-width: 800px) {
    text-align: center;
    padding-top: 0 !important;

  }
`

const JobDescription = styled.div`
  padding-top: 10px;
  max-width: 700px;
`

const JobDate = styled.div`
  font-weight: bold;
  padding-top: 5px;
  font-size: 18px;
`

const JobTitle = styled.a`
  color: #0047FF;
  font-weight: bold;
  font-size: 22px;

  &:hover {
    color: black;
  }

`


const TextSkills = styled.div`
  grid-area: text;

`


const Skills = styled.div`
  display: flex;
  padding-bottom: 70px;
  @media (max-width: 1250px) {
    flex-wrap: wrap;
  }
  @media (max-width: 800px) {
    justify-content: center;
    padding-bottom: 0px;
  }
`

const Footer = styled.div`
  padding: 30px 0;
  grid-area: footer;
  background: #0047FF;
  color: white;
  font-weight: bold;
  text-align: center;
`

const Skill = styled.div`


  margin: 12px;
  width: 35px;

  &:first-child {
    margin-left: 0;
  }

  @media (max-width: 1250px) {
    //flex: 33%;
    &:first-child {
      margin-left: 12px;
    }
  }

  background: #DEE5FD;
  padding: 14px 14px 10px 14px;
  border-bottom-left-radius: 15px;

  svg {
    fill: #0047FF;
  }
`


const CurrentlyListening = styled.p`
  color: #0047FF;
  font-weight: bold;
  padding-bottom: 10px;
  font-size: 16px;
  @media (max-width: 800px) {
    text-align: center;
  }
`


const Spotify = styled.div`
  width: 100%;
  grid-area: spotify;
  padding-left: 20px;
  @media (max-width: 1000px) {
    padding-left: 0;
  }
  @media (max-width: 800px) {
    padding: 20px 0;
  }
`;

const Heading = styled.h3`
  font-weight: bold;
  font-size: 62px;

  color: #0047FF;
  @media (max-width: 800px) {
    text-align: center;
    padding-bottom: 15px;
    font-size: 35px;
  }
`;

const AboutHeading = styled(Heading)`
  grid-area: aboutHeading;
`

const Text = styled.div`
  max-width: 770px;

  p {
    padding-bottom: 20px;
  }

  @media (max-width: 800px) {
    text-align: center;
  }
`;


const SpotifyContainer = styled.div`
  background: #DEE5FD;
  max-width: 400px;
  border-bottom-left-radius: 50px;
  padding: 25px;
  display: flex;
  @media (max-width: 800px) {
    margin: auto;
  }

`;
const SpotifyImage = styled.img`
  border-radius: 50%;
  @media (max-width: 800px) {
    width: 40px;
    height: 40px;
  }
`;


const SongTitle = styled.div`
  font-weight: bold;
  max-width: 250px;
  padding-bottom: 10px;
  flex: 100%;
  @media (max-width: 800px) {
    font-size: 12px;
  }
`;


const SongData = styled.div`
  padding-left: 25px;
  display: flex;
  align-content: center;
  flex-wrap: wrap;
`;

const SongProgressHolder = styled.div`
  min-width: 200px;
  height: 5px;

  background-color: white;
  position: relative;
  border-radius: 7px;
  @media (max-width: 800px) {
    min-width: unset;
    width: 100%;
  }
`;

const SongProgress = styled.div`
  background-color: #0047FF;
  border-radius: 7px;
  position: relative;
  transition: width 1s;
  left: 0;
  height: inherit;
`;

const Header = styled.div`
  background: #DEE5FD;
  grid-area: header;
  border-bottom-left-radius: 100px;
  min-height: 700px;
  position: relative;
  padding: 20px 100px 0 100px;
  @media (max-width: 800px) {
    padding: 30px 15px;
  }

`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 100px 4fr 4fr 100px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    ". aboutSpotify aboutSpotify ."
    ". job os ."
    "articles articles articles articles"
    "footer footer footer footer";

  @media (max-width: 800px) {
    grid-template-columns: 25px auto 25px;
    grid-template-areas: 
    "header header header"
    ". aboutSpotify ."
    ". job ."
    ". os ."
    "articles articles articles"
    "footer footer footer";
  }

`;
const Navbar = styled.div`
  display: flex;
  padding-bottom: 100px;
  @media (max-width: 800px) {
    padding-bottom: 30px;
  }

`;
const Logo = styled.img``;
const LanguageContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const Portrait = styled.img`
  position: absolute;
  filter: drop-shadow(14px 0px 0px #C7D0F0);
  right: 0;
  bottom: 0;

  @media (max-width: 1300px) {
    width: 550px;
  }

  @media (max-width: 800px) {
    width: 350px;
    left: 0;
    right: unset;
    border-bottom-left-radius: 100px;
  }


  @media (max-width: 600px) {
    width: 100vw;
    left: unset;
    right: 0;
    border-bottom-left-radius: 392px;
    border-left: 165px solid white;
    border-bottom: 30px solid white;
    position: absolute;
    bottom: -40px;
  }
`;
const Lang = styled.div<{ active?: boolean }>`

  cursor: pointer;

  color: ${({ active }) => active ? '#0047FF' : 'black'};
  font-weight: ${({ active }) => active ? 'bold' : 'unset'};
  margin: 0 5px;
  font-size: 17px;
  border-bottom: ${({ active }) => active ? '3px solid #0047FF' : 'unset'};

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
const SocialContainer = styled.div`
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


export const getStaticProps: GetStaticProps = async ({ params }) => {

    return {
        props: {
            propLang: params?.lang
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [
            { params: { lang: 'cs' } },
            { params: { lang: 'en' } }
        ],
        fallback: false
    }

}
