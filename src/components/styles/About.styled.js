import styled, { keyframes } from "styled-components";
export const AboutSection = styled.section`
    display: grid;
    grid-template-rows: minmax(auto, 1.5fr) minmax(auto, 1fr);
    align-items: center;
    justify-content: center;
    height: 500px;
    transition: all 0.4s;
    h2 {
        color: ${({ theme }) => theme.colors.mainColor1};
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 1px;
        padding: 0.4rem 0.7rem;
        width: max-content;
        text-align: end;
        position: absolute;
        right: -10px;
        top: 0;
        background: rgba(255, 255, 255, 0.45);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(2.5px);
        -webkit-backdrop-filter: blur(2.5px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
    }
    @media ${({ theme }) => theme.devices.tablet} {
        row-gap: 0;
        column-gap: 4rem;
        grid-template-rows: none;
        grid-template-columns: minmax(auto, 1.5fr) minmax(auto, 1fr);
        h2 {
            font-size: 27.5px;
            left: -10px;
            top: 30px;
            padding: 0.5rem 0.8rem;
        }
    }
`;

export const AboutData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
    img {
        width: 175px;
        height: 175px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(4.5px);
        -webkit-backdrop-filter: blur(4.5px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        margin-bottom: 50px;
    }

    p {
        color: black;
        opacity: 0.7;
        font-weight: 600;
        font-size: 0.75rem;
        line-height: 1.5rem;
        letter-spacing: 1.2px;
    }
    span {
        font-size: 0.95rem;
        color: ${({ theme }) => theme.colors.mainColor1};
    }
    @media ${({ theme }) => theme.devices.mobileL} {
        img {
            width: 180px;
            height: 180px;
        }
        p {
            font-size: 0.85rem;
            line-height: 1.75rem;
        }
    }
    @media ${({ theme }) => theme.devices.tablet} {
        img {
            width: 180px;
            height: 180px;
        }
        p {
            font-size: 1rem;
            line-height: 2rem;
        }
        span {
            font-size: 1.1rem;
        }
    }
`;

export const BgImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        max-width: 250px;
        max-height: 250px;
    }
`;

export const SkillSection = styled.section`
    height: 500px;
    display: grid;
    width: 100%;
    margin-top: 80px;
    grid-template-rows: minmax(auto, 1.5fr) minmax(auto, 1fr);
    h2 {
        color: ${({ theme }) => theme.colors.mainColor1};
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
        padding: 0.4rem 0.7rem;
        width: max-content;
        text-align: end;
        position: absolute;
        left: -10px;
        background: rgba(255, 255, 255, 0.45);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(2.5px);
        -webkit-backdrop-filter: blur(2.5px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
    }
    @media ${({ theme }) => theme.devices.tablet} {
        column-gap: 4rem;
        grid-template-rows: none;
        grid-template-columns: minmax(auto, 1fr) minmax(auto, 1.5fr);
        h2 {
            font-size: 2rem;
            left: -10px;
            top: auto;
            padding: 0.5rem 0.8rem;
        }
    }
`;

export const SkillsContainer = styled.div`
    display: grid;
    grid-template-rows: 2.5fr 1fr;
    width: 100%;
    height: 90%;
    align-self: flex-end;
    background: rgba(255, 255, 255, 0.45);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
`;

export const SkillsBox = styled.div`
    h3 {
        text-align: center;
        color: ${({ theme }) => theme.colors.mainColor1};
        font-weight: 600;
        letter-spacing: 1px;
    }
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    align-items: center;
    row-gap: 5px;
`;

export const SkillBox = styled.div`
    padding: 0 0.5rem;
    display: flex;
    width: 100%;
    column-gap: 1rem;
    align-items: center;
    span {
        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.mainColor1};
        opacity: 0.7;
        font-weight: 600;
        width: 50px;
    }
`;

const paintValue = (value) => keyframes`
    from{
        width : 0%
    }
    to{
        width: ${value}%
    }
`;

export const SkillInputBox = styled.div`
    width: 100%;
    display: inline-flex;
`;

export const SkillInputValueBox = styled.div`
    width: 100%;
    height: 10px;
    background-color: #88aabf;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    div {
        width: ${({ value }) => value}%;
        background-color: ${({ theme }) => theme.colors.mainColor1};
        height: 100%;
        column-gap: 1rem;
        animation: ${({ value }) => paintValue(value)} 2s linear;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    margin-right: 10px;
`;

export const ExtraSkill = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-top: 1px solid ${({ theme }) => theme.colors.mainColor1};
    div {
        text-align: center;
        h3 {
            color: ${({ theme }) => theme.colors.mainColor1};
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 15px;
            padding-top: 15px;
            font-size: 1rem;
        }
        li {
            color: ${({ theme }) => theme.colors.mainColor1};
            opacity: 0.7;
            font-size: 0.8rem;

            margin-bottom: 10px;
        }
        &:first-child {
            border-right: 1px solid ${({ theme }) => theme.colors.mainColor1};
        }
    }
    @media ${({ theme }) => theme.devices.mobileL} {
        div {
            h3 {
                font-size: 1.05rem;
            }
        }
    }
    @media ${({ theme }) => theme.devices.tablet} {
        div {
            h3 {
                font-size: 1.1rem;
            }
            li {
                font-size: 0.95rem;
            }
        }
    }
`;
