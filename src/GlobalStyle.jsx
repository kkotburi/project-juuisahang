import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap');

* {
  font-family: 'Noto Sans KR', sans-serif;
}

body {

  font-family: 'Noto Sans KR', sans-serif;
  background-color:#F3F3F3;
  max-width: 1200px;
  margin: 0 auto;
  
}
`;

export default GlobalStyle;
