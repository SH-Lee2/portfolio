import React from "react";
import {
    AboutData,
    AboutSection,
    BgImage,
    SkillSection,
} from "../../styles/About.styled";
import Transitions from "../../Transitions";
import Skills from "./Skills";
import image from "../../../assets/me.jpg";
import image2 from "../../../assets/Saly-10.png";
import image3 from "../../../assets/Saly-11.png";
import { Container } from "../../styles/Container.styled";

const About = () => {
    return (
        <Transitions>
            <Container>
                <AboutSection>
                    <h2>About Me</h2>
                    <AboutData>
                        <img src={image} alt="프로필 이미지" />
                        <p>
                            안녕하세요 컴퓨터소프트웨어를 전공으로 졸업하고
                            프론트엔드 개발자를 목표로 공부하고 있는
                            <span>이시형</span>입니다.
                            <br /> 주로 사용하는 언어는 리액트를 사용하며
                            최근에는 타입스트립트에 관심을 가져 공부하고
                            있습니다.
                        </p>
                    </AboutData>
                    <BgImage>
                        <img src={image2} alt="about 배경 이미지" />
                    </BgImage>
                </AboutSection>
                <SkillSection>
                    <BgImage>
                        <img src={image3} alt="skills 배경 이미지" />
                    </BgImage>
                    <h2>Skills</h2>
                    <Skills />
                </SkillSection>
            </Container>
        </Transitions>
    );
};

export default About;
