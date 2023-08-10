import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
    body {
        max-width: 1200px;
        background-color: #F3F3F3;
        margin: 0 auto;
    }
`;

export default GlobalStyle;
