import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                {/* <svg width="82" height="82" viewBox="0 0 82 82" fill="none">
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
                </svg> */}
                <svg width="173" height="385" viewBox="0 0 173 385" fill="none">
                    <g clipPath="url(#clip0_9_5929)">
                        <path
                            d="M131.36 341.03L117.98 341.15C117.98 341.15 112.18 351.64 109.3 357.25C109.12 357.61 108.6 358.51 108.24 359.16C107.793 360.139 107.457 361.166 107.24 362.22C106.18 367.71 106.85 372.72 110.5 376.22C114.5 380.05 117.5 383.41 123.74 379.46C129.98 375.51 131.61 372.46 131.74 363.01C131.87 353.56 131.41 341.01 131.41 341.01L131.36 341.03ZM63.23 341.72L51.02 347.17C51.02 347.17 49.89 359.11 49.5 365.4C49.5 365.81 49.36 366.84 49.29 367.58C49.2653 368.658 49.3626 369.734 49.58 370.79C50.8 376.24 53.42 380.57 58.16 382.31C63.36 384.21 67.46 386.09 71.59 379.98C75.72 373.87 75.99 370.39 72.32 361.71C68.65 353.03 63.23 341.71 63.23 341.71"
                            fill="#4B44BE"
                        />
                        <path
                            d="M66.18 46.8899L104.5 39.54C104.5 39.54 107.7 23.5399 106.74 20.6999C105.78 17.8599 104.88 11.6099 99.45 9.69995C94.02 7.78995 86.72 -7.49004 68.51 4.64996C50.3 16.79 60.12 31.25 60.12 31.25L66.18 46.8899Z"
                            fill="url(#paint0_linear_9_5929)"
                        />
                        <path
                            d="M93.24 14.8398C93.24 14.8398 74.15 22.2098 69.81 24.0198C65.47 25.8298 63.12 31.0699 63.12 31.0699C63.12 31.0699 60.98 29.7998 60.98 33.4198C60.98 37.0398 62.76 45.1898 64.05 47.2698C66.2789 50.7866 68.3088 54.4257 70.13 58.1698C71.89 61.8998 71.5 67.5198 71.08 69.5898C70.28 73.4898 52.39 100.8 52.39 100.8L59.02 108.53L66.44 115.08L118.6 111.08C118.6 111.08 100.44 75.5198 97.6 69.5198C96.32 66.8298 97.68 60.2998 98.43 56.9698C99.11 53.9198 100.6 50.0898 102.05 48.9698C103.5 47.8498 106.05 42.8198 106.05 40.6398C106.05 38.4598 106.47 31.5698 104.6 33.3998C104.1 33.8898 101.6 29.9899 100.89 26.7299C99.6695 22.0538 96.9897 17.8887 93.24 14.8398V14.8398Z"
                            fill="url(#paint1_linear_9_5929)"
                        />
                        <path
                            d="M17.23 210.67C17.23 210.67 1.42999 224.85 1.42999 230.84C1.42999 236.83 4.14999 252.64 9.32999 261.91C14.51 271.18 46.33 341.65 50.16 347.08C50.82 348.02 64.43 344.24 64.43 344.24C64.43 344.24 58.12 315.33 57.03 308.79C55.94 302.25 40.18 263.55 40.18 259.73C40.18 255.91 42.9 250.46 51.63 248.83C60.36 247.2 78.88 245.01 85.42 247.19C91.96 249.37 120.18 249.09 125.18 255.37C128.35 259.42 125.18 264.02 121.91 279.37C118.64 294.72 120.82 315.92 118.1 322.47C115.38 329.02 115.56 343.12 116.9 343.21C120.55 343.44 130.43 344.28 131.46 343.55C133.27 342.26 143.73 318.9 145.53 314.93C148.37 308.69 157.34 274.5 158.43 265.78C159.52 257.06 164.97 241.25 163.88 236.89C162.79 232.53 138.81 205.82 120.82 202C102.83 198.18 47.23 193.83 40.69 198.19C34.15 202.55 17.23 210.67 17.23 210.67Z"
                            fill="url(#paint2_linear_9_5929)"
                        />
                        <path
                            opacity="0.1"
                            d="M62.8 336.73C62.8 336.73 57.85 312.27 56.44 306.44C54.83 299.79 42.03 269.79 40.13 259.73C38.29 250.04 32.78 263.26 34.42 272.53C36.06 281.8 45.32 298.69 45.86 306.87C46.4 315.05 62.8 336.73 62.8 336.73Z"
                            fill="black"
                        />
                        <path
                            d="M172.57 69.3398H0V198.24H172.57V69.3398Z"
                            fill="url(#paint3_linear_9_5929)"
                        />
                        <path
                            opacity="0.07"
                            d="M70.85 75.8199C69.93 74.6099 67.27 76.4599 69.67 72.8199C73.67 66.7299 70.12 57.4099 70.12 57.4099C70.12 57.4099 72.12 61.6499 79.12 61.0799C86.12 60.5099 87.31 58.4499 79.6 66.5999C71.89 74.7499 69.66 74.4999 70.83 75.8599"
                            fill="black"
                        />
                        <g opacity="0.07">
                            <path
                                d="M24.59 216.22L134.18 214.51C134.18 214.51 111.18 226.41 114.57 232.74C119.02 241.08 110.09 250.42 97.51 248.88C86.87 247.58 84.67 245.4 78.07 245.96C60.96 247.41 49.2 246.41 47.5 243.81C33.39 222.14 24.62 216.22 24.62 216.22"
                                fill="black"
                            />
                        </g>
                        <g opacity="0.07">
                            <path
                                d="M50.3801 114.42C52.2601 117.8 54.07 119.68 52.96 122.6C50.77 128.36 50.26 135.18 57.06 140.65C61.65 144.34 60.8301 150.2 64.3201 150.25C67.0201 151.84 59.1001 151.37 59.1001 151.37H51.18L46.18 151.09C46.24 149.98 44.67 135.28 44.74 133.27C44.99 126.19 45.13 122.04 44.56 118.94C43.56 113.7 43.85 115.67 46.11 112C46.94 110.67 49.4501 113.21 50.4101 114.43"
                                fill="black"
                            />
                        </g>
                        <path
                            d="M21.09 156.55C21.09 156.55 21.01 151.78 25.71 151.55C30.41 151.32 130.31 151.47 130.31 151.47C130.31 151.47 134.7 151.99 134.85 155.57C135 159.15 135 211.89 135 211.89C135.013 212.448 134.911 213.002 134.701 213.52C134.491 214.037 134.177 214.505 133.779 214.896C133.38 215.287 132.906 215.592 132.385 215.792C131.864 215.992 131.308 216.083 130.75 216.06C126.43 216.14 24.59 216.21 24.59 216.21C24.59 216.21 20.79 215.21 20.86 211.44C20.93 207.67 21.09 156.54 21.09 156.54"
                            fill="white"
                        />
                        <path
                            d="M82.65 179.51H74.02V188.14H82.65V179.51Z"
                            fill="url(#paint4_linear_9_5929)"
                        />
                    </g>
                    <defs>
                        <linearGradient
                            id="paint0_linear_9_5929"
                            x1="57.52"
                            y1="23.44"
                            x2="106.96"
                            y2="23.44"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4B44BE" />
                            <stop offset="0.33" stopColor="#4B44BE" />
                            <stop offset="1" stopColor="#5BD3EF" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_9_5929"
                            x1="52.39"
                            y1="64.9598"
                            x2="118.6"
                            y2="64.9598"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#F87B58" />
                            <stop offset="0.41" stopColor="#F89453" />
                            <stop offset="0.71" stopColor="#F8C548" />
                            <stop offset="1" stopColor="#F89C51" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_9_5929"
                            x1="1.42999"
                            y1="271.77"
                            x2="164.01"
                            y2="271.77"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#5ACEED" />
                            <stop offset="0.39" stopColor="#5492D8" />
                            <stop offset="0.49" stopColor="#5282D3" />
                            <stop offset="0.84" stopColor="#538BD6" />
                            <stop offset="1" stopColor="#5ACEED" />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_9_5929"
                            x1="3.4237"
                            y1="133.624"
                            x2="173.299"
                            y2="133.624"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#906AF2" />
                            <stop offset="0.12" stopColor="#E1A1ED" />
                            <stop offset="0.64" stopColor="#9B71F1" />
                            <stop offset="0.94" stopColor="#7658F4" />
                            <stop offset="1" stopColor="#7658F4" />
                        </linearGradient>
                        <linearGradient
                            id="paint4_linear_9_5929"
                            x1="84.229"
                            y1="183.69"
                            x2="75.6722"
                            y2="183.69"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#59C2E9" />
                            <stop offset="1" stopColor="#5BD3EF" />
                        </linearGradient>
                        <clipPath id="clip0_9_5929">
                            <rect width="172.57" height="384.15" fill="white" />
                        </clipPath>
                    </defs>
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
