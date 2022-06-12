import React from "react";
import { SettingContainer } from "../styles/Settingbox.styled";
import ColorPicker from "./ColorPicker";
import ThemePicker from "./ThemePicker";

const SettingBox = ({ onChangeTheme }) => {
    return (
        <SettingContainer>
            <ThemePicker onChangeTheme={onChangeTheme} />
            <ColorPicker />
        </SettingContainer>
    );
};

export default SettingBox;
