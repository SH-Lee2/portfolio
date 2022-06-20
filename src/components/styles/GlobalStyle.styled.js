import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
/* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Open+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,400;1,500;1,600;1,700&display=swap'); */

export const GlobalStyle = createGlobalStyle`
${reset}


*{
    box-sizing: border-box;
}

@keyframes gradient{
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
};

body{
    height:100vh;
    width: 100vw;
    font-family: 'Open Sans', sans-serif;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    display: grid;
    place-content: center;
    padding: 0 30px;
    
}

a{
    text-decoration: none;
}
`;
