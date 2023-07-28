import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 body {
    width: 100vw;
    height: 100vh;
    background-color: rgb(27, 28, 38);
    font-family: Arial, Helvetica, sans-serif
 }

 #rectangle {
    width: 100%;
    height: 100px;
    background-color: orange;
}
`;

export default GlobalStyle;