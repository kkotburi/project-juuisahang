import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
body {
  background-color:#F3F3F3;
}
`;

export default GlobalStyle;
