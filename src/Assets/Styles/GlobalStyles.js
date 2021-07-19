import { createGlobalStyle } from "styled-components";
import FaFont from '../Fonts/IranSans.ttf';

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: faFont;
    src: url(${FaFont});
}
*{
    margin: 0;
    padding: 0;
}

*,::before,::after{
    box-sizing: border-box;
}

body{
    font-family: faFont;
}
`;

export default GlobalStyles;