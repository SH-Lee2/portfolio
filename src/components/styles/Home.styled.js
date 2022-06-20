import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const HomeSection = styled.section`
    display: grid;
    height: 500px;
    width: 100%;
    transition: all 0.4s;
    row-gap: 2rem;
    grid-template-rows: minmax(auto, 1.5fr) minmax(auto, 1fr);
    align-items: center;
    justify-content: center;
    @media ${({ theme }) => theme.devices.tablet} {
        row-gap: 0;
        column-gap: 10rem;
        grid-template-rows: none;
        grid-template-columns: minmax(auto, 1.5fr) minmax(auto, 1fr);
    }
`;

const bounce = keyframes`
 from, to { transform: scale(1, 1) }
  25% { transform: scale(0.9, 1.06) }
  50% { transform: scale(1.07, 0.9) }
  75% { transform: scale(0.95, 1.04) }
  `;

export const Title = styled.div`
    h2 {
        white-space: pre-wrap;
        animation: ${bounce} 1s;
        font-weight: 600;

        letter-spacing: 0.5px;
        line-height: 2rem;
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.mainColor1};
        margin-bottom: 1.5rem;
        span {
            font-size: 1.6rem;
        }
    }
    span {
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.side};
    }

    @media ${({ theme }) => theme.devices.mobileL} {
        h2 {
            letter-spacing: 0.7px;
            line-height: 2.4rem;
            font-size: 1.4rem;
            span {
                font-size: 2rem;
            }
        }
        span {
            font-size: 1.15rem;
        }
    }
    @media ${({ theme }) => theme.devices.tablet} {
        h2 {
            letter-spacing: 0.8px;
            line-height: 2.6rem;
            font-size: 1.5rem;
            span {
                font-size: 2.1rem;
            }
        }
        span {
            font-size: 1.4rem;
        }
    }
    @media ${({ theme }) => theme.devices.laptop} {
        h2 {
            letter-spacing: 1px;
            line-height: 3rem;
            font-size: 2rem;
            span {
                font-size: 2.4rem;
            }
        }
        span {
            font-size: 1.3rem;
        }
    }
`;

export const HomeData = styled.div`
    display: grid;
    row-gap: 5rem;
`;

const jump = keyframes`
    0%{
        transform:translate(0 ,0)
    }
    50% {
        transform:translate(15px ,-30px)

    }
    100%{
        transform:translate(0 ,0)

    }
`;

export const HomeImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    img {
        animation: linear ${jump} 2s;
        transition: 2s;
        width: 100%;
        height: 100%;
        max-width: 250px;
        max-height: 250px;
        &:hover {
            transform: translate(15px, -30px);
            transition: 2s;
        }
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    column-gap: 1.2rem;
    height: max-content;
`;

export const Button = styled(Link)`
    background-color: ${({ theme }) => theme.colors.mainColor1};
    color: ${({ theme }) => theme.colors.baseColor};
    padding: 0.5rem 0.8rem;
    font-size: 0.8rem;
    border-radius: 7.5px;
    display: flex;
    letter-spacing: 1px;
    align-items: center;
    column-gap: 0.6rem;
    font-weight: 400;
    -webkit-box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.14);
    box-shadow: 1px 2px 10px 2px rgba(0, 0, 0, 0.14);
    &:nth-child(2) {
        background-color: transparent;
        border: 2px solid ${({ theme }) => theme.colors.mainColor1};
        color: #000;
    }
    @media ${({ theme }) => theme.devices.mobileL} {
        padding: 0.6rem 0.9rem;
        font-size: 1rem;
    }
`;
