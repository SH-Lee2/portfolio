import styled, { keyframes } from "styled-components";

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
`;

export const SettingContainer = styled.div`
    position: absolute;
    /* left: 0; */
    top: 1.5rem;
    right: 2rem;
    display: inline-flex;
    column-gap: 0.5rem;
    svg {
        cursor: pointer;
        font-size: 1.8rem;

        &:first-child {
            animation: ${spin} 8s linear infinite;
            color: ${({ theme }) => theme.colors.yellow};
        }
        &:nth-child(2) {
            animation: ${spin} 8s linear infinite;
            color: ${({ theme }) => theme.colors.baseColor};
        }
        &:hover {
            animation: none;
        }
    }
`;
