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
                        <SwiperSlide>
                            <article>
                                <h3>Portfolio</h3>
                                <img
                                    className="image"
                                    src={portfolio}
                                    alt="포트폴리오 프로젝트 이미지"
                                />
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article>
                                <h3>Tic Tac Toe game</h3>

                                <img
                                    className="image"
                                    src={tictoc}
                                    alt="틱택톡 프로젝트 이미지"
                                />
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article>
                                <h3>Responsive Web</h3>
                                <img
                                    className="image"
                                    src={responsive}
                                    alt="반응형 프로젝트 이미지"
                                />
                                <a
                                    href="https://github.com/SH-Lee2/responsive_web"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    go
                                </a>
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article>
                                <h3>Social coin App</h3>

                                <img
                                    className="image"
                                    src={coin}
                                    alt="소셜 코인 프로젝트 이미지"
                                />
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article>
                                <h3>Carrot Game</h3>

                                <img
                                    className="image"
                                    src={carrotGame}
                                    alt="당근게임 프로젝트 이미지"
                                />
                            </article>
                        </SwiperSlide>
                        <SwiperSlide>
                            <article>
                                <h3>Youtube Clone</h3>

                                <img
                                    className="image"
                                    src={notube}
                                    alt="유튜브 클론 프로젝트 이미지"
                                />
                            </article>
                        </SwiperSlide>
                    </Swiper>
                </ProjectSection>
            </Container>
        </Transitions>
    );
};

export default Project;
