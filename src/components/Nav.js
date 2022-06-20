import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header, Logo, Nav } from "./styles/Nav.styled";
import {
    faEnvelope,
    faHouse,
    faUser,
    faHamsa,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <Header>
            <Logo to="/">sh</Logo>
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
        </Header>
    );
};

export default Sidebar;
