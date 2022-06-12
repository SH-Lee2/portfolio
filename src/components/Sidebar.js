import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../assets/King Stickman.png";
import { Header, Logo, Nav, SocialIconsList } from "./styles/Sidebar.styled";
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
            <Logo>
                <svg width="82" height="82" viewBox="0 0 82 82" fill="none">
                    <g opacity="0.1">
                        <path
                            opacity="0.1"
                            d="M81 79.1059V80.9937H79.1122"
                            stroke="#20263C"
                            strokeMiterlimit="10"
                        />
                        <path
                            opacity="0.1"
                            d="M75.4812 80.9937H4.70645"
                            stroke="#20263C"
                            strokeMiterlimit="10"
                            strokeDasharray="5.77 5.77"
                        />
                        <path
                            opacity="0.1"
                            d="M2.88783 80.9937H1V79.1059"
                            stroke="#20263C"
                            strokeMiterlimit="10"
                        />
                        <path
                            opacity="0.1"
                            d="M1 75.4749V4.70015"
                            stroke="#20263C"
                            strokeMiterlimit="10"
                            strokeDasharray="5.77 5.77"
                        />
                        <path
                            opacity="0.1"
                            d="M1 2.88783V1H2.88783"
                            stroke="#20263C"
                            strokeMiterlimit="10"
                        />
                        <path
                            opacity="0.1"
                            d="M6.51877 1H77.2936"
                            stroke="#20263C"
                            strokeMiterlimit="10"
                            strokeDasharray="5.77 5.77"
                        />
                        <path
                            opacity="0.1"
                            d="M79.1122 1H81V2.88783"
                            stroke="#20263C"
                            strokeMiterlimit="10"
                        />
                        <path
                            opacity="0.1"
                            d="M81 6.51247V77.2936"
                            stroke="#20263C"
                            strokeMiterlimit="10"
                            strokeDasharray="5.77 5.77"
                        />
                    </g>
                    <path
                        id="logo"
                        d="M27.4297 60.152L40.9628 51.246L54.4886 60.152L40.9628 18.6198L27.4297 60.152Z"
                        fill="#414042"
                    />
                    <path
                        id="logo"
                        d="M34.3517 31.8346L19.249 37.1736L31.0833 41.2737L34.3517 31.8346Z"
                        fill="#414042"
                    />
                    <path
                        id="logo"
                        d="M62.6692 37.1736L47.5665 31.8346L50.8349 41.2737L62.6692 37.1736Z"
                        fill="#414042"
                    />
                </svg>
            </Logo>
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
