import React from "react";
import Transitions from "../../Transitions";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
    Button,
    ButtonBox,
    HomeData,
    HomeImage,
    HomeSection,
    Title,
} from "../../styles/Home.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../../../assets/Saly-43.png";
import { Container } from "../../styles/Container.styled";

const Home = () => {
    return (
        <Transitions>
            <Container>
                <HomeSection>
                    <HomeData>
                        <Title>
                            <h2>
                                Hi, I'm <span>SiHyeong Lee.</span>
                                <br />
                                I'm a frontend developer.
                            </h2>
                            <span>#Frontend Developer</span>
                        </Title>
                        <ButtonBox>
                            <Button to="project">
                                View Work{" "}
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Button>
                            <Button to="contact">
                                Contact Me{" "}
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Button>
                        </ButtonBox>
                    </HomeData>
                    <HomeImage>
                        <img src={image} alt="프로필 사진" />
                    </HomeImage>
                </HomeSection>
            </Container>
        </Transitions>
    );
};

export default Home;
