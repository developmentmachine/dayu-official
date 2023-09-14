import React from "react";
// import Image from "next/image";
// import product1 from "../static/product1.png";
// import product2 from "../static/product2.png";
// import product3 from "../static/product3.png";
// import product4 from "../static/product4.png";
import {Container, Image} from "react-bootstrap";
import {useTranslation} from "next-i18next";

const Achievement: React.FC<{ id: string }> = (props) => {
    const {t} = useTranslation();
    return (
        <Container id={props.id}>
            <div className="achievement">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">{t("achievement:title")}</h2>
                </div>
                <div className="row pt-3 mt-3">
                    <div className="col-lg-3 col-sm-6 mb-3">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
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
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-3">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
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
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-3">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
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
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-3">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
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
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Achievement;
