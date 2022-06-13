import React from "react";
import { Container } from "../../styles/Container.styled";
import { Section } from "../../styles/Section.styled";
import Transitions from "../../Transitions";

const Home = () => {
    return (
        <Transitions>
            <Section>
                <Container></Container>
            </Section>
        </Transitions>
    );
};

export default Home;
