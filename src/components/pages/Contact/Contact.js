import React from "react";
import {
    ContactHeader,
    ContactList,
    ContactSection,
    SocialList,
} from "../../styles/Contact.styled";
import ContactForm from "./ContactForm";
import { Container } from "../../styles/Container.styled";
import Transitions from "../../Transitions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
    return (
        <Transitions>
            <Container>
                <ContactSection>
                    <div>
                        <ContactHeader>
                            <h2>Contact Me</h2>
                            <span>
                                연락 주시면 빠른 시일 내에 답변드리겠습니다.!
                            </span>
                        </ContactHeader>
                        <ContactList>
                            <span>
                                <FontAwesomeIcon icon={faPhone} />
                                +82-1026247273
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faEnvelope} />
                                tlgud585@gmail.com
                            </span>
                        </ContactList>

                        <SocialList>
                            <a
                                href="https://www.instagram.com/isihyeong596/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/lee-sihyeong-01a404227/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </SocialList>
                    </div>
                    <ContactForm />
                </ContactSection>
            </Container>
        </Transitions>
    );
};

export default Contact;
