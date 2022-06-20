import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/styles/GlobalStyle.styled";
import { theme } from "./components/styles/theme";
import Animated from "./components/Animated";
import { ContainerBox } from "./components/styles/ContainerBox.styled";
import Nav from "./components/Nav";
function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ContainerBox>
                <Nav />
                <Animated />
            </ContainerBox>
        </ThemeProvider>
    );
}

export default App;
