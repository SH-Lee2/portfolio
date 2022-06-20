import React from "react";
import { Container } from "../../styles/Container.styled";
import { ProjectSection } from "../../styles/Project.styled";
import Transitions from "../../Transitions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import {
    portfolio,
    tictoc,
    responsive,
    carrotGame,
    notube,
    coin,
} from "../../../assets/project-images/index";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const projects = [
    {
        name: "Portfolio",
        img: portfolio,
        des: "포트폴리오 프로젝트 이미지",
        link: "https://github.com/SH-Lee2/portfolio",
    },
    {
        name: "Tic Tac Toe game",
        img: tictoc,
        des: "틱택톡 프로젝트 이미지",
        link: "https://github.com/SH-Lee2/toc",
    },
    {
        name: "Responsive Web",
        img: responsive,
        des: "반응형 프로젝트 이미지",
        link: "https://github.com/SH-Lee2/responsive_web",
    },
    {
        name: "Social coin App",
        img: coin,
        des: "소셜 코인 프로젝트 이미지",
        link: "https://github.com/SH-Lee2/social-coin",
    },
    {
        name: "Carrot Game",
        img: carrotGame,
        des: "당근게임 프로젝트 이미지",
        link: "https://github.com/SH-Lee2/carrot__game",
    },
    {
        name: "Youtube Clone",
        img: notube,
        des: "유튜브 클론 프로젝트 이미지",
        link: "https://github.com/SH-Lee2/youtube_cloneCoding",
    },
];

const Project = () => {
    return (
        <Transitions>
            <Container>
                <ProjectSection>
                    <h2>My Project (6)</h2>
                    <Swiper
                        initialSlide={0}
                        spaceBetween={30}
                        grabCursor={true}
                        centeredSlides={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                        slidesPerView="auto"
                        loop={true}
                    >
                        {projects.map((project) => (
                            <SwiperSlide>
                                <article>
                                    <h3>project.name</h3>
                                    <img
                                        className="image"
                                        src={project.img}
                                        alt={project.des}
                                    />
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            color="#fff"
                                        />
                                    </a>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ProjectSection>
            </Container>
        </Transitions>
    );
};

export default Project;
