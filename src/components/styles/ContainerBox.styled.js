import styled from "styled-components";

export const ContainerBox = styled.div`
    position: relative;
    min-width: 320px;
    max-width: 910px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(1.5px);
    -webkit-backdrop-filter: blur(1.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    @media ${({ theme }) => theme.devices.mobileM} {
        border-radius: 0;
    }
`;
