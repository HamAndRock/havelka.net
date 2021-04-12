import {
    LanguageJava,
    LanguageJavascript, LanguageKotlin,
    LanguageTypescript, Minecraft,
    Nodejs,
    React as ReactIcon, Sass,
    Vuejs,
} from 'mdi-material-ui';
import React from 'react';
import styled from 'styled-components';

export const Skills = () => {
    const skills = [
        <ReactIcon fontSize="large" />,
        <LanguageTypescript fontSize="large" />,
        <LanguageJavascript fontSize="large" />,
        <Nodejs fontSize="large" />,
        <Vuejs fontSize="large" />,
        <LanguageJava fontSize="large" />,
        <Sass fontSize="large" />,
        <Minecraft fontSize="large" />,
        <LanguageKotlin fontSize="large" />,

    ];

    return (
        <StyledSkills>
            {skills.map((skill, id) => (
                <Skill key={id}>
                    {skill}
                </Skill>
            ))}

        </StyledSkills>
    );
};

const StyledSkills = styled.div`
  display: flex;
  padding-bottom: 70px;
  @media (max-width: 1250px) {
    flex-wrap: wrap;
  }
  @media (max-width: 800px) {
    justify-content: center;
    padding-bottom: 0;
  }
`;

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
`;
