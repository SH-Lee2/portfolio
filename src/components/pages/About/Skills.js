import React from "react";
import {
    SkillBox,
    SkillsContainer,
    SkillInputBox,
    SkillsBox,
    SkillInputValueBox,
    ExtraSkill,
} from "../../styles/About.styled";
const Skills = () => {
    const languageArr = ["HTML5", "CSS3", "JS", "React", "NodeJS"];
    const values = [80, 80, 80, 80, 65];
    return (
        <SkillsContainer>
            <SkillsBox>
                <h3>Skills</h3>
                {languageArr.map((language, idx) => (
                    <SkillBox key={idx}>
                        <span>{language}</span>
                        <SkillInputBox>
                            <SkillInputValueBox value={values[idx]}>
                                <div></div>
                            </SkillInputValueBox>
                            <span>{values[idx]}%</span>
                        </SkillInputBox>
                    </SkillBox>
                ))}
            </SkillsBox>
            <ExtraSkill>
                <div>
                    <h3>Tools</h3>
                    <ul>
                        <li>
                            <span>Visual Studio Code</span>
                        </li>
                        <li>
                            <span>Figma app</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Etc</h3>
                    <ul>
                        <li>
                            <span>Git</span>
                        </li>
                    </ul>
                </div>
            </ExtraSkill>
        </SkillsContainer>
    );
};

export default Skills;
