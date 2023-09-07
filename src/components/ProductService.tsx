import React from "react";
import {Card, Container, Row, Col} from "react-bootstrap";
import ps1 from "@/static/ps1.png";
import ps2 from "../static/ps2.png";
import ps3 from "../static/ps3.png";
import ps4_1 from "../static/ps4-1.png";
import ps4_2 from "../static/ps4-2.png";
import ps5 from "../static/ps5.png";
import ps6 from "../static/ps6.png";
import ps7 from "../static/ps7.png";
import Image from "next/image";
import {BigPlayButton, ControlBar, Player} from "video-react";
import {useTranslation} from "next-i18next";



const ProductService: React.FC<{id:string}> = (props) => {
    const { t } = useTranslation();
    return (
        <Container className="" id={props.id}>
                <div className="text-center">
                    <p className="fs-3">{t("productService:title")}</p>
                    <p className="text-start">{t("productService:k1")}</p>
                </div>
                <Row>
                    <Col>
                        <div className="team-member">
                            <Image src={ps1} alt={""} className="mx-auto rounded-circle"/>
                        </div>
                    </Col>
                    <Col>
                        <div className="team-member">
                            <Image src={ps2} alt={""} className="mx-auto rounded-circle"/>
                        </div>
                    </Col>
                </Row>
                <div className="team-member">
                    <p className="text-start">{t("productService:k2")}</p>
                </div>
                <Row>
                    <Col>
                        <div className="team-member">
                            <Image src={ps3} alt={""} className="mx-auto rounded-circle"/>
                        </div>
                    </Col>
                    <Col>
                        <div className="team-member">
                            <Image src={ps4_1} alt={""} className="mx-auto rounded-circle"/>
                        </div>
                    </Col>
                    <Col>
                        <div className="team-member">
                            <Image src={ps4_2} alt={""} className="mx-auto rounded-circle"/>
                        </div>
                    </Col>
                </Row>
                <div className="">
                    <p className="">{t("productService:k3")}</p>
                </div>
                <Row>
                    <Col>
                        <Image src={ps5} alt="" className="display-samples"/>
                    </Col>
                    <p>{t("productService:k4")}</p>
                    <Col>
                        <Image src={ps6} alt={t("productService:k5")} className="display-samples"/>
                    </Col>
                    <p>{t("productService:k5")}</p>
                    <Col>
                        <div className="">
                            <Image src={ps7} alt={t("productService:k6")} className="display-samples"/>
                        </div>
                    </Col>
                    <p>{t("productService:k6")}</p>
                </Row>
                <Row>
                    <Col>
                        <Player src="/video/tech.mp4">
                            <BigPlayButton position="center" />
                            <ControlBar autoHide={false} className="my-class" />
                        </Player>
                    </Col>
                </Row>
        </Container>
    )
};
export default ProductService;