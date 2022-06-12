import React from "react";
import { Section } from "../../styles/Section.styled";
import { Title, Wrapper } from "../../styles/Contact.styled";
import ContactForm from "./ContactForm";
import { Container } from "../../styles/Container.styled";
import Transitions from "../../Transitions";
import ContactCards from "./ContactCards";

const Contact = () => {
    return (
        <Transitions>
            <Section>
                <Container>
                    <Title>Contact Me</Title>
                    <Wrapper>
                        <ContactCards />
                    </Wrapper>
                    <ContactForm />
                </Container>
            </Section>
        </Transitions>
    );
};

export default Contact;
