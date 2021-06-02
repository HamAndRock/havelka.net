import React from 'react';
import styled from 'styled-components';
import { Heading } from '~/components/common/common';

export const ArticleList = () => {
    const articles = [
        {
            heading: 'Nedopusťme, abychom dopadli jako oni.',
            image: 'article.png',
            text: 'USA dříve závistivě hleděly na evropský způsob boje s koronavirem...',
        },
        {
            heading: 'Nedopusťme, abychom dopadli jako oni.',
            image: 'article.png',
            text: 'USA dříve závistivě hleděly na evropský způsob boje s koronavirem...',
        },
        {
            heading: 'Nedopusťme, abychom dopadli jako oni.',
            image: 'article.png',
            text: 'USA dříve závistivě hleděly na evropský způsob boje s koronavirem...',
        },
    ];

    return (
        <ArticleContainer>
            <Heading>Publikace</Heading>
            <StyledArticleList>
                {articles.length === 0 && (
                    <p>Jěště jsem nic nenapsal, ale napíšu tak to všechno najdeš tady nebo na mém&nbsp;
                        <a href="https://medium.com/@hamandrock" target="_blank" rel="noreferrer">medium profilu</a>.
                    </p>
                )}
                {articles.length > 0 && articles.map((article) => (
                    <Article key={article.heading}>
                        <ArticleImage src={article.image} />
                        <ArticleHeading>
                            {article.heading}
                        </ArticleHeading>
                        <ArticleText>
                            {article.text}
                        </ArticleText>
                    </Article>
                ))}
            </StyledArticleList>
        </ArticleContainer>
    );
};

const Article = styled.div`
  flex: 33%;
  max-width: 320px;
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    flex: 100%;
  }

`;

const ArticleContainer = styled.div`
  background: #DEE5FD;
  grid-area: articles;
  border-top-right-radius: 100px;
  padding: 50px 100px 50px 100px;

  @media (max-width: 800px) {
    padding: 30px 15px;
  }
`;

const ArticleHeading = styled.a`
  display: block;
  padding: 16px 0 10px 0;
  font-weight: bold;
  font-size: 22px;
  color: #0047FF;
  @media (max-width: 800px) {
    text-align: center;
  }
`;

const ArticleImage = styled.img`
  border-radius: 20px;
  @media (max-width: 800px) {
    max-width: 250px;
    margin: auto;
  }
`;
const ArticleText = styled.div`
  font-size: 18px;
  @media (max-width: 800px) {
    text-align: center;
  }
`;

const StyledArticleList = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 800px) {
    justify-content: center;
  }


`;
