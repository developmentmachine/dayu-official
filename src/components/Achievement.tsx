import React from "react";
import Image from "next/image";
import product1 from "../static/product1.png";
import product2 from "../static/product2.png";
import product3 from "../static/product3.png";
import product4 from "../static/product4.png";
import { Container } from "react-bootstrap";


const Achievement: React.FC<{ id: string }> = (props) => {
    return (
        <Container id={props.id}>
            <div className="achievement">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">应用业绩</h2>
                    <h3 className="section-subheading text-muted"></h3>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6 mb-3">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-bs-toggle="modal" href="#">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <Image className="img-fluid" src={product1} alt={""}/>
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">
                                    <p>浙江石油化工有限公司异丁烷反异构装置 稳定塔重沸器</p>
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
                                <Image className="img-fluid" src={product2} alt={""}/>
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">
                                    <p>振华石油化工有限公司丙烷脱氢装置脱丙烷塔热回收再沸器</p>
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
                                <Image className="img-fluid" src={product3} alt={""}/>
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">
                                    <p>中国石油四川石化有限责任公司 催化裂化装置 解析塔中间重沸器</p>
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
                                <Image className="img-fluid" src={product4} alt={""}/>
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">
                                    <p>中国石油化工股份有限公司镇海炼化分公司 催化裂化装置稳定汽油-凝缩油换热器</p>
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
