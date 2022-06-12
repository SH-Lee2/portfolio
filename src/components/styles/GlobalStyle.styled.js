import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
/* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Open+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,400;1,500;1,600;1,700&display=swap'); */

export const GlobalStyle = createGlobalStyle`
${reset}


*{
    box-sizing: border-box;
}

body{
    height:100vh;
    background-color: ${({ theme }) => theme.colors.bgColor};
    font-family: 'Open Sans', sans-serif;
}

a{
    text-decoration: none;
}
`;
