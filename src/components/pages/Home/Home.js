import React from "react";
import { Container } from "../../styles/Container.styled";
import { Section } from "../../styles/Section.styled";
import Transitions from "../../Transitions";
import lightHome from "../../../assets/home-light.png";
import darkHome from "../../../assets/home-dark.png";

import { HomeImage, Title } from "../../styles/Home.styled";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
const Home = () => {
    const { theme } = useTheme();
    const image = theme === "dark" ? darkHome : lightHome;
    const greetText = "안녕하세요\n프론트엔드 개발자\n이시형 입니다.";
    return (
        <Transitions>
            <Section>
                <Container>
                    <div>
                        <Title>{greetText}</Title>
                        <HomeImage src={image} alt="홈 이미지" />
                    </div>
                    <Link to="contact">Contact ME</Link>
                </Container>
            </Section>
        </Transitions>
    );
};

export default Home;
