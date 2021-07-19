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
    outline: 0;
    direction: rtl;
    text-decoration: none;
}

*,::before,::after{
    box-sizing: border-box;
}

#root{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

body{
    font-family: faFont;
}

.navbar-toggler{
    display: none;
    @media (max-width:768px){
        display: flex;
    }
}


`;

export default GlobalStyles;