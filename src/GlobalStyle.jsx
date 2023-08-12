import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

* {
  font-family: 'Noto Sans KR', sans-serif;
  max-width: 100%;
  
}

body {
  font-family: 'Noto Sans KR', sans-serif;
  background-color:#F3F3F3;
  margin: 0 auto; 
  height:100%;
}
`;

export default GlobalStyle;
