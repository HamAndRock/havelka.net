import styled from 'styled-components';

export const Rectangle = styled.div`
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

export const Text = styled.div`
  max-width: 770px;

  p {
    padding-bottom: 20px;
  }

  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const Heading = styled.h3`
  font-weight: bold;
  font-size: 58px;

  color: #0047FF;
  @media (max-width: 800px) {
    text-align: center;
    padding-bottom: 15px;
    font-size: 35px;
  }
`;

export const Container = styled.div`
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
