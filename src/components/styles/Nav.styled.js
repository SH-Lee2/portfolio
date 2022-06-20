import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    transition: 0.4;
`;
export const Logo = styled(Link)`
    display: inline-flex;
    align-items: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.mainColor1};
    font-weight: 700;
    font-style: italic;
    letter-spacing: 2px;
    text-decoration: underline;
    padding: 2rem;
    flex: 1;
    @media ${({ theme }) => theme.devices.tabletS} {
        padding-top: 4rem;
        margin-bottom: 2rem;
    }
`;
export const Nav = styled.nav`
    flex: 1;
    width: 100%;
    text-align: center;
    padding: 2rem;
    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        li {
            position: relative;
            .active svg,
            .active::after {
                color: ${({ theme }) => theme.colors.mainColor1};
            }
            a {
                color: ${({ theme }) => theme.colors.baseColor};
                &:hover {
                    svg {
                        opacity: 0;
                    }
                    &:after {
                        opacity: 1;
                    }
                    transition: all 0.5s;
                }
                &::after {
                    content: "";
                    position: absolute;
                    left: 0px;
                    top: 30%;
                    text-align: center;
                    letter-spacing: 1px;
                    font-weight: 700;
                    width: 100%;
                    font-size: 0.8rem;
                    opacity: 0;
                    transition: all 0.5s;
                }
            }
            &:nth-child(1) {
                a {
                    &::after {
                        content: "HOME";
                    }
                }
            }
            &:nth-child(2) {
                a {
                    &::after {
                        content: "ABOUT";
                        left: -10px;
                    }
                }
            }
            &:nth-child(3) {
                a {
                    &::after {
                        content: "PROJECT";
                        left: -10px;
                    }
                }
            }
            &:nth-child(4) {
                a {
                    &::after {
                        content: "CONTACT";
                        left: -20px;
                    }
                }
            }
        }
    }
    @media ${({ theme }) => theme.devices.tabletS} {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 63px;
        padding: 1.2rem 1rem;
        transition: 0.4s;
        font-size: 0.8rem;
        background-color: #fff;
        ul {
            li {
                a {
                    &:hover {
                        svg {
                            opacity: 1;
                        }
                        &::after {
                            opacity: 0;
                        }
                    }
                }
            }
        }
    }
`;
