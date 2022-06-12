import styled from "styled-components";

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.mainColor1};
    text-align: center;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 2.5px;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    column-gap: 1.8rem;
    padding: 0 5rem;
    margin: 2rem 0;
    justify-content: center;
`;

export const ContactCard = styled.article`
    background-color: ${({ theme }) => theme.colors.mainColor1};
    border-radius: 10px;
    text-align: center;
    width: 160px;
    height: 160px;

    padding: 1.2rem 1.5rem;
    svg {
        color: ${({ theme }) => theme.colors.baseColor};
        font-size: 4rem;
        margin-bottom: 10px;
    }
    &:hover {
        transition: all 0.5s;
        transform: translateY(5px);
    }
    margin-top: 3rem;
    margin-bottom: 3rem;
`;

export const ContactCardData = styled.div`
    color: ${({ theme }) => theme.colors.baseColor};
    letter-spacing: 1px;
    h2 {
        margin-bottom: 5px;
        font-size: 1.2rem;
        font-weight: 600;
    }
    h3 {
        font-size: 0.9rem;
    }
`;

// FORM

export const Form = styled.form`
    display: grid;
    margin: auto;
    row-gap: 1rem;
    background-color: ${({ theme }) => theme.colors.mainColor1};
    border-radius: 15px;
    padding: 2rem 10rem;
    max-width: 700px;
    .error {
        background-color: ${({ theme }) => theme.colors.errorColor};
    }
    input,
    textarea {
        border-radius: 5px;
        border: none;
        -webkit-box-shadow: 0px 0px 15px -5px #000000;
        box-shadow: 0px 0px 15px -6px #000000;
        &:focus {
            outline: none;
        }
        padding: 0.5rem;
        font-size: 0.89rem;
        letter-spacing: 0.8px;
    }

    textarea {
        resize: none;
        height: 150px;
    }

    button {
        margin: auto;
        border: none;
        border-radius: 5px;
        padding: 0.5rem;
        font-weight: 600;
        -webkit-box-shadow: 1px 1px 15px 0px #000000;
        box-shadow: 1px 1px 15px -6px #000000;
        cursor: pointer;
    }
`;
