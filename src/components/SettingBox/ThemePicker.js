import React, { Fragment } from "react";
import { useTheme } from "styled-components";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ThemePicker = ({ onChangeTheme }) => {
    const { theme } = useTheme();
    return (
        <Fragment>
            <FontAwesomeIcon
                icon={theme === "dark" ? faMoon : faSun}
                onClick={onChangeTheme}
            />
        </Fragment>
    );
};

export default ThemePicker;
