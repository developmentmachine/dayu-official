import React from "react";
// import Image from "next/image";
// import product1 from "../static/product1.png";
// import product2 from "../static/product2.png";
// import product3 from "../static/product3.png";
// import product4 from "../static/product4.png";
import {Container, Image, Row} from "react-bootstrap";
import {useTranslation} from "next-i18next";
import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Achievement: React.FC<{ id: string }> = (props) => {
    const {t} = useTranslation();
    return (
        <Container id={props.id}>
            <Row className="achievement">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">{t("achievement:title")}</h2>
                </div>
                <Row className="w-100 m-0 p-0">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        loop={true}
                        pagination={{clickable: true}}
                        scrollbar={{draggable: true}}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        modules={[EffectCoverflow, Pagination]}
                        className="mySwiper w-100"
                    >
                        <SwiperSlide>
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i
                                            className="fas fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <Image className="img-fluid"
                                           src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/product1.png"/>
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">
                                        <p>{t("achievement:k1")}</p>
                                    </div>
                                    <div className="portfolio-caption-subheading text-muted">
                                        <p>BJU1600-2.24/2.8-339-5.5/32-2HFO</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i
                                            className="fas fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <Image className="img-fluid"
                                           src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/product2.png"/>
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">
                                        <p>{t("achievement:k2")}</p>
                                    </div>
                                    <div className="portfolio-caption-subheading text-muted">
                                        <p>BXM1700-3.8/2.0-2404-12/19-2 HFO</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i
                                            className="fas fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <Image className="img-fluid"
                                           src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/product3.png"/>
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">
                                        <p>{t("achievement:k3")}</p>
                                    </div>
                                    <div className="portfolio-caption-subheading text-muted">
                                        <p>BJS1500-1.81-635-6/25-4 GT</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="portfolio-item">
                                <a className="portfolio-link" data-bs-toggle="modal">
                                    <div className="portfolio-hover">
                                        <div className="portfolio-hover-content"><i
                                            className="fas fa-plus fa-3x"></i>
                                        </div>
                                    </div>
                                    <Image className="img-fluid"
                                           src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/product4.png"/>
                                </a>
                                <div className="portfolio-caption">
                                    <div className="portfolio-caption-heading">
                                        <p>{t("achievement:k4")}</p>
                                    </div>
                                    <div className="portfolio-caption-subheading text-muted">
                                        <p>BJS1400-2.0/2.25-540-6/24-4 HFO</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Row>
            </Row>
        </Container>
    );
};

export default Achievement;
