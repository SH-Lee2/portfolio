import React, { Fragment } from "react";
import {
    faInstagram,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactCard, ContactCardData } from "../../styles/Contact.styled";

const ContactCards = () => {
    return (
        <Fragment>
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
        </Fragment>
    );
};

export default ContactCards;
