import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  body {
    font-family: 'Poppins';
  }
  
  a {
    color: black;
    &:hover {
      color: #0047FF;
    }
  }
`;
