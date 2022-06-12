import React from "react";
import {
    faInstagram,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Section } from "../../styles/Section.styled";
import {
    ContactCard,
    ContactCardData,
    Title,
    Wrapper,
} from "../../styles/Contact.styled";
import ContactForm from "./ContactForm";
import { Container } from "../../styles/Container.styled";
const Contact = () => {
    return (
        <Section>
            <Container>
                <Title>Contact Me</Title>
                {/* gitHub,linkedin  */}
                <Wrapper>
                    <ContactCard>
                        <FontAwesomeIcon icon={faInstagram} />
                        <ContactCardData>
                            <h2>Instagram</h2>
                            <h3>닉네임</h3>
                        </ContactCardData>
                    </ContactCard>
                    <ContactCard>
                        <FontAwesomeIcon icon={faGithub} />
                        <ContactCardData>
                            <h2>GitHub</h2>
                            <h3>SH-Lee2</h3>
                        </ContactCardData>
                    </ContactCard>
                    <ContactCard>
                        <FontAwesomeIcon icon={faLinkedin} />
                        <ContactCardData>
                            <h2>LinkedIn</h2>
                            <h3>LEE SIHYEONG</h3>
                        </ContactCardData>
                    </ContactCard>
                </Wrapper>
                <ContactForm />
                {/* form */}
            </Container>
        </Section>
    );
};

export default Contact;
