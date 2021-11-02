import React from 'react';
import styled from 'styled-components';
import { Heading, Rectangle } from '~/components/common/common';

export const JobsContainer = () => {
    const jobs = [
        {
            title: [
                {
                    name: 'Prague Labs',
                    href: 'https://praguelabs.com/',
                },
            ],
            date: '2021 - nyní',
            description: (
                <div>
                    <p>Jako react developer mám na starosti vývoj aplikací pro klienty z celého světa.</p>
                    <p>
                        Starám se o projekty jako je <a href="https://www.boatsetter.com/">Boatsetter</a>,{' '}
                        <a href="https://www.campiri.com/cs-cz">Campiri</a>, <a href="https://vivodeportes.com/">Vivo deportes</a> a mnoho dalších.
                    </p>
                    <p>Hlavně se zaměřuji na zrychlování aplikací ve všech metrikách Web Vitals.</p>
                </div>
            ),
        },
        {
            title: [
                {
                    name: 'Trisbee',
                    href: 'https://www.trisbee.com/cs/CZ/obchodnik',
                },
                {
                    name: 'BOOM',
                    href: 'https://www.goforboom.com/en',
                },
            ],
            date: '2020 - nyní',
            description: `
            V Trisbee jsem se podílel na vzniku cashless platformy Trisbee pro platbu obchodníkům přes QR kódy. Kromě platební aplikace jsem se taky podílel na 
            tvorbě portálu pro prodej lístků na události. Veškeré projekty byli postaveny na Next.js, Typescriptu a lingui pro internalizaci obsahu. 
            Nyní v Trisbee působím spíše jako konzultant.
    
            `,

        },
        {
            title: [
                {
                    name: 'ShopUp',
                    href: 'https://shopup.cz/',
                },
            ],
            date: '2019 - 2020',
            description: `
            Podílel jsem se na vývoji administrace pro eshopy. Hlavním úkolem bylo přepisování statické PHP administrace do Vue.js a následná migrace veškerých eshopů do Nuxt.js
            `,
        },
        {
            title: [
                {
                    name: 'Complete Internet Services',
                    href: 'https://www.cis.cz/',
                },
            ],
            date: '2016 - 2019',
            description: `
            Pracoval jsem jako FullStack vývojář na různorodých projektech v PHP, převážně se jednalo o eshopy, blogy. 
            Ke konci keriéry jsem se přesunul z Fullstacku na Frontendistu, kde jsem pracoval na platformě pro vytváření dymického obsahu pro eshopy.
            `,
        },
        {
            title: [
                {
                    name: 'GateCraft',
                    href: 'https://gatecraft.cz/-gatecraft-/-intro-page-',
                },
            ],
            date: '2016 - nyní',
            description: `
            Ve svém volném čase si rád zahraju i nějaké hry, mezi ně patří i Minecraft. GateCraft je moje srdeční záležitost na které pracuji, když jsou nápady či update.
            Jedná se o český server s historii zasahující až do roku 2012 se skvělou komunitou hráčů.
            Mám na starost tvorbu pluginů, správu linux server a gameplay design.
            `,
        },
        // {
        //     title: [
        //         {
        //             name: 'Na volné noze',
        //             href: 'https://havelka.net/',
        //         },
        //     ],
        //     date: '2014 - nyní',
        //     description: `
        //     Když zrovna nemám co dělat tak se pořád někam posouvám a dělám na drobných projektech. Když na něčem dělám snažím se vybrat ideální techlogický stack pro danou věc.
        //     Aplikace na kterých jsem pracoval se všechny liší, některé byli postaveny na Vue.js, React.js, Springu, PHP či dokonce v Unity.
        //     `,
        // },
    ];

    return (
        <StyledJobsContainer>
            <Heading>Pracovní zkušenosti</Heading>
            <div>
                {jobs.map((job, index) => (
                    <Job key={job.title[0].name}>
                        {index === 0 ? <Rectangle /> : <CRectangle />}
                        <div>
                            {job.title.map((title, titleIndex, list) => (
                                <span key={`${title.name}_`}>
                                    <JobTitle
                                        target="_blank"

                                        href={title.href}
                                    >
                                        {title.name}
                                    </JobTitle>
                                    {(titleIndex !== list.length - 1) && (<span>&nbsp;<b>&</b>&nbsp;</span>)}
                                </span>
                            ))}
                        </div>
                        <JobDate>
                            {job.date}
                        </JobDate>
                        <JobDescription>
                            {job.description}
                        </JobDescription>
                    </Job>
                ))}
            </div>
        </StyledJobsContainer>
    );
};

const StyledJobsContainer = styled.div`
  padding-bottom: 90px;
  grid-area: job;
  @media(max-width: 800px) {
    padding-bottom: 40px;
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

`;

const Job = styled.div`

  &:not(:first-child) {
    padding-top: 40px;
  }

  @media (max-width: 800px) {
    text-align: center;
    padding-top: 0 !important;

  }
`;

const JobDescription = styled.div`
  padding-top: 10px;
  max-width: 700px;
`;

const JobDate = styled.div`
  font-weight: bold;
  padding-top: 5px;
  font-size: 18px;
`;

const JobTitle = styled.a`
  color: #0047FF;
  font-weight: bold;
  font-size: 22px;

  &:hover {
    color: black;
  }

`;
