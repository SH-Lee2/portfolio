import styled from "styled-components";

export const Container = styled.main`
    margin-top: 80px;
    overflow-y: auto;
    position: relative;
    max-height: 600px;
    padding: 2rem;
    display: grid;
    place-items: center;
    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 0;
    }
    @media ${({ theme }) => theme.devices.tabletS} {
        row-gap: 6rem;
        padding-bottom: 120px;
    }
`;
