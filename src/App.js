import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Home from "./components/pages/Home/Home";
import Project from "./components/pages/Project/Project";
import SettingBox from "./components/SettingBox/SettingBox";
import { GlobalStyle } from "./components/styles/GlobalStyle.styled";

const lightTheme = {
    theme: "light",
    colors: {
        bgColor: "#F2F2F2",
        side: "#F2CB05",
        baseColor: "#0D0D0D",
        mainColor1: "#F29F05",
        yellow: "#D92B04",
        errorColor: "#f2dc6d",
    },
};
const darkTheme = {
    theme: "dark",
    colors: {
        bgColor: "#0D0D0D",
        side: "#404040",
        baseColor: "#D9D4D0",
        mainColor1: "#0378A6",
        yellow: "#F2CB05",
        errorColor: "#f2dc6d",
    },
};
function App() {
    const [selectedTheme, setSelectedTheme] = useState("dark");
    const themeHandler = () => {
        setSelectedTheme((preTheme) =>
            preTheme === "dark" ? "light" : "dark"
        );
    };
    const theme = selectedTheme === "dark" ? darkTheme : lightTheme;
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <SettingBox onChangeTheme={themeHandler} />
        </ThemeProvider>
    );
}

export default App;
