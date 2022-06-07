import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Header, Logo, Nav, SocialIconsList } from "../styles/Sidebar.styled";
import {
    faEnvelope,
    faHouse,
    faUser,
    faHamsa,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
        <Header>
            <Logo>로고</Logo>
            <Nav>
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            <FontAwesomeIcon icon={faHouse} size={"2x"} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            <FontAwesomeIcon icon={faUser} size={"2x"} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/project"
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            <FontAwesomeIcon icon={faHamsa} size={"2x"} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? "active" : undefined
                            }
                        >
                            <FontAwesomeIcon icon={faEnvelope} size={"2x"} />
                        </NavLink>
                    </li>
                </ul>
            </Nav>
            <SocialIconsList>
                <li>
                    <a
                        href="https://www.linkedin.com/in/lee-sihyeong-01a404227"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/SH-Lee2"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
            </SocialIconsList>
        </Header>
    );
};

export default Sidebar;
