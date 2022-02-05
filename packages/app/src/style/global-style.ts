import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html{
        font-family: -apple-system;
        max-width: 100vw;
        min-height: 100vh;
        background-color: #fff;
    }
    body, html{
        padding: 0;
        margin: 0;
    }
`
export default GlobalStyle;