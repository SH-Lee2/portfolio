import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 0;
    background-color: ${({ theme }) => theme.colors.side};
    width: 90px;
    height: 100%;
    position: absolute;
`;
export const Logo = styled.div`
    text-align: center;
`;
export const Nav = styled.nav`
    width: 100%;
    text-align: center;
    ul {
        display: grid;
        row-gap: 4rem;
        li {
            position: relative;
            .active svg,
            .active::after {
                color: ${({ theme }) => theme.colors.lightRed};
            }
            a {
                color: ${({ theme }) => theme.colors.baseIconColor};

                &:hover {
                    svg {
                        opacity: 0;
                    }
                    &:after {
                        opacity: 1;
                    }
                }
                &::after {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    text-align: center;
                    letter-spacing: 1px;
                    font-weight: 700;
                    width: 100%;
                    font-size: 0.8rem;
                    opacity: 0;
                    transition: all 0.3s;
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
                    }
                }
            }
            &:nth-child(3) {
                a {
                    &::after {
                        content: "PROJECT";
                    }
                }
            }
            &:nth-child(4) {
                a {
                    &::after {
                        content: "CONTACT";
                    }
                }
            }
        }
    }
`;

export const SocialIconsList = styled.ul`
    display: grid;
    text-align: center;
    row-gap: 0.5rem;
    font-size: 1.2rem;
    li {
        a {
            svg {
                color: ${({ theme }) => theme.colors.baseIconColor};
                opacity: 0.5;
                &:hover {
                    opacity: 0.8;
                    transition: all 0.3s;
                }
            }
        }
    }
`;