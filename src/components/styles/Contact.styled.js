import styled from "styled-components";

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.mainColor1};
    text-align: center;
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 2.5px;
    @media ${({ theme }) => theme.colors.laptop} {
        font-size: 3rem;
        letter-spacing: 1.5px;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    column-gap: 1.8rem;
    padding: 0 5rem;
    margin: 4rem 0;
    justify-content: center;
    @media ${({ theme }) => theme.colors.laptop} {
        column-gap: 1.5rem;
        margin: 3rem 0;
    }
`;

export const ContactCard = styled.article`
    background-color: ${({ theme }) => theme.colors.mainColor1};
    border-radius: 10px;
    text-align: center;
    width: 140px;
    height: 130px;
    padding: 0.8rem 1rem;
    svg {
        color: ${({ theme }) => theme.colors.baseColor};
        font-size: 3rem;
        margin-bottom: 10px;
    }
    &:hover {
        transition: all 0.5s;
        transform: translateY(5px);
    }
    @media ${({ theme }) => theme.colors.laptop} {
        width: 130px;
        height: 120px;
        padding: 0.7rem 0.9rem;
        svg {
            font-size: 2.5rem;
        }
    }
`;

export const ContactCardData = styled.div`
    color: ${({ theme }) => theme.colors.baseColor};
    letter-spacing: 1px;
    h2 {
        margin-bottom: 5px;
        font-size: 1.1rem;
        font-weight: 600;
    }
    h3 {
        font-size: 0.8rem;
    }
    @media ${({ theme }) => theme.colors.laptop} {
        h2 {
            font-size: 1rem;
        }
        h3 {
            font-size: 0.75rem;
        }
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
        font-weight: 500;
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
    @media ${({ theme }) => theme.colors.laptop} {
        padding: 1.8rem 8rem;
        max-width: 600px;
        textarea {
            resize: none;
            height: 130px;
        }
    }
`;
