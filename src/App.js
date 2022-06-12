import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar";

import SettingBox from "./components/SettingBox/SettingBox";
import { GlobalStyle } from "./components/styles/GlobalStyle.styled";
import { darkTheme, lightTheme } from "./components/styles/theme";
import Animated from "./components/Animated";
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
            <Animated />
            <SettingBox onChangeTheme={themeHandler} />
        </ThemeProvider>
    );
}

export default App;
