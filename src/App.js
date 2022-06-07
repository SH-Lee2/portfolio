import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Home from "./components/pages/Home/Home";
import { GlobalStyle } from "./components/styles/GlobalStyle.styled";

const lightTheme = {};
const darkTheme = {
    colors: {
        bgColor: "#0D0D0D",
        side: "#404040",
        baseIconColor: "#D9D4D0",
        skyBlue: "#38ABF2",
        yellow: "#F2CB05",
        orange: "#F2B705",
        lightRed: "#F24405",
    },
};
function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyle />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
