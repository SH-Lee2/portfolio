import styled from "styled-components";

export const ProjectSection = styled.section`
    height: 500px;
    width: 100%;
    max-width: 250px;
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
        left: -10px;
        background: rgba(255, 255, 255, 0.45);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(2.5px);
        -webkit-backdrop-filter: blur(2.5px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
    }

    .mySwiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        article {
            padding: 0.5rem 0.5rem 1.5rem;
            border-radius: 1rem;
            transition: 0.4s;
            position: relative;
            background: rgba(255, 255, 255, 0.45);
            backdrop-filter: blur(2.5px);
            -webkit-backdrop-filter: blur(2.5px);
            border-radius: 10px;
            border: 1px solid rgba(255, 255, 255, 0.18);
            h3 {
                text-align: center;

                color: ${({ theme }) => theme.colors.mainColor1};
                font-size: 1.25rem;
                font-weight: 600;
                letter-spacing: 1px;
                margin-bottom: 10px;
            }
            img {
                width: 240px;
                height: 240px;
                border-radius: 15px;
            }
            &:hover {
                transform: scale(1.02);
                a {
                    display: block;
                }
            }
            a {
                position: absolute;
                display: none;
                top: 50%;
                left: 50%;
                font-size: 2rem;
                color: #fff;
            }
        }
    }
    @media ${({ theme }) => theme.devices.mobileL} {
        max-width: 350px;
    }
    @media ${({ theme }) => theme.devices.tablet} {
        max-width: 650px;
    }
    @media ${({ theme }) => theme.devices.laptop} {
        max-width: 844px;
    }
`;
