import styled from "styled-components";

export const ContactSection = styled.section`
    /* height: 100%; */
    height: 500px;
    row-gap: 2rem;
    transition: all 0.4s;
    display: grid;
    grid-template-rows: minmax(auto, 1.2fr) minmax(auto, 1.5fr);
    height: 500px;
    align-items: center;
    justify-content: center;
    @media ${({ theme }) => theme.devices.tablet} {
        row-gap: 0;
        column-gap: 4rem;
        grid-template-rows: none;
        grid-template-columns: minmax(auto, 1.2fr) minmax(auto, 1.5fr);
        height: 500px;
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(4.5px);
        -webkit-backdrop-filter: blur(4.5px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        padding: 2rem;
        div {
            row-gap: 2rem;
            display: grid;
        }
    }
`;

export const ContactHeader = styled.div`
    flex: 0.3;
    color: #ffffff;
    h2 {
        font-size: 1.2rem;
        font-weight: 700;
        letter-spacing: 1px;
        margin-bottom: 20px;
    }
    span {
        font-size: 0.8rem;
        letter-spacing: 1px;
        opacity: 0.8;
    }
    margin-bottom: 20px;
    @media ${({ theme }) => theme.devices.tablet} {
        h2 {
            font-size: 2rem;
        }
        span {
            font-size: 0.9rem;
        }
    }
`;
export const ContactList = styled.div`
    flex: 0.4;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    font-size: 0.95rem;
    margin-bottom: 30px;
    span {
        color: #ffffff;
        letter-spacing: 1.5px;
        font-weight: 300;
    }
    svg {
        color: ${({ theme }) => theme.colors.mainColor1};
        margin-right: 15px;
    }
`;
export const SocialList = styled.div`
    display: flex;
    align-items: flex-end;
    flex: 0.3;
    column-gap: 0.5rem;
    a {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        color: #ffffff;
        font-size: 1.1rem;
        position: relative;
        &:hover {
            cursor: pointer;
            background: ${({ theme }) => theme.colors.mainColor1};
        }
    }
    @media ${({ theme }) => theme.devices.tablet} {
        grid-auto-flow: column;
        justify-content: flex-start;
    }
`;

// FORM

export const Form = styled.form`
    display: grid;
    margin: auto;
    row-gap: 1rem;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    button {
        margin: auto;
        border-radius: 5px;
        padding: 0.5rem;
        font-weight: 600;
        font-size: 0.75rem;
        letter-spacing: 1px;
        cursor: pointer;
        color: #fff;
        border: 1px solid ${({ theme }) => theme.colors.mainColor1};
        background: ${({ theme }) => theme.colors.mainColor1};
        &:disabled {
            opacity: 0.5;
            color: ${({ theme }) => theme.colors.mainColor1};
            background: transparent;
        }
    }
`;

export const InputBox = styled.div`
    position: relative;
    input,
    textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid ${({ theme }) => theme.colors.mainColor1};
        border-radius: 5px;
        background-color: transparent;
        outline: none;
        letter-spacing: 1.25px;
        color: #ffffff;
        font-size: 1rem;
        &:valid ~ span,
        &:focus ~ span {
            transform: translate(10px, -8px);
            font-size: 0.75rem;
            padding: 2px 10px;
            background: ${({ theme }) => theme.colors.mainColor1};
            color: #ffffff;
            letter-spacing: 1px;
            opacity: 1;
            border-radius: 5px;
            transition: all 0.5s;
        }
    }
    .error:valid ~ span,
    .error:focus ~ span {
        background: #b00020;
    }
    textarea {
        resize: none;
        height: 140px;
    }
    span {
        position: absolute;
        left: 0;
        pointer-events: none;
        padding: 10px;
        color: gray;
        opacity: 0.5;
        transition: all 0.5s;
        font-size: 0.8rem;
    }
    span.error {
        transform: translate(10px, -8px);
        font-size: 0.75rem;
        padding: 2px 10px;
        background: #b00020;
        color: #ffffff;
        letter-spacing: 1px;
        opacity: 1;
        border-radius: 5px;
        transition: all 0.5s;
    }
    .error {
        border-color: #b00020;
    }
    @media ${({ theme }) => theme.devices.tablet} {
        textarea {
            height: 250px;
        }
    }
`;
