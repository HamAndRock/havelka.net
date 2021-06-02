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
            description: 'Jako seniorní react developer mám na starosti vývoj interních aplikací a také vývoj aplikací pro místí i zahraniční klienty.',
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
            description: `Mezi nejzajímavější reference mohu zařadit platební PWA aplikaci. Ovšem jsem se podílel na vzniku
            portálu pro prodej lístu na údálostí, tvorbě interních systémů a vytoření technologického stacku. Všechny projekty jsou více jazyčné a tak i s tímto oborem mám mnoho zkušností.
            Mám na starosti skupinku několika juniorních programatorů a často se podílím na návrhu greenfield projektů. Povedlo se mi také vydat i několik Open Source knihoven.
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
            Pracoval jsem jako Seniorní Vue.js vývojář s menším přesahem do PHP backendu. Na statrosti jsem měl v této době přepis administračního systému ze šablon do
            Vue.js komponent.
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
            Pracoval jsem jako FullStack vývojář na tvorbě interní ecommerce platformy. 
            Práce se odehrávala na několika interních projektech a na projektech pro širokou škálu zákazníků.
            Ke konci kariéru jsem se přesunul spíše na frontendovou část projektů.
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
            Pracuji jako hlavní vývojář Minecraft Serveru s více než 25 vlasními pluginy, které jsem přepsal a aktualizoval. 
            Pracuji s Gradle, Java 11, Databázemi , Správou Linux Serveru a často se podílím na GamePlay designu.`,
        },
        {
            title: [
                {
                    name: 'Na volné noze',
                    href: 'https://havelka.net/',
                },
            ],
            date: '2014 - nyní',
            description: `
            Když zrovna nemám co dělat tak se pořád někam posouvám a dělám na drobných projektech. Když na něčem dělám snažím se vybrat ideální techlogický stack pro danou věc.
            Aplikace na kterých jsem pracoval se všechny liší, některé byli postaveny na Vue.js, React.js, Springu, PHP či dokonce v Unity.
            `,
        },
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
