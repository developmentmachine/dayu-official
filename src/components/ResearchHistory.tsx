import React, {useEffect, useState} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import "node_modules/video-react/dist/video-react.css";
// import timeline from "../static/timeline.png";
// import timeline2 from "../static/timeline2.png";
// import techParam from "../static/tech-param.png";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

const ResearchHistory: React.FC<{ id: string }> = (props) => {
    const {t} = useTranslation();

    const timeline1 = "https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/timeline.png";
    const timeline2 = "https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/timeline2.png";

    const [imageSrc, setImageSrc] = useState(timeline1);
    const router = useRouter();
    useEffect(() => {
        // console.log("Current locale -> " + router.locale)
        if (router.locale && router.locale === "en") {
            setImageSrc(timeline2)
        } else {
            setImageSrc(timeline1)
        }
    }, [router.locale]);
    return (
        <Container className="" id={props.id}>
            <Row>
                <Col>
                    <Image src={imageSrc} className="w-100"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="lh-lg text-wrap fw-medium">{t("researchHistory:k1")}</p>
                </Col>
            </Row>
            <Row>
                <Col xs={"12"} sm={"12"} md={"12"} lg={"6"}>
                    <p className="lh-lg text-wrap">{t("researchHistory:k2")}</p>
                </Col>
                <Col xs={"12"} sm={"12"} md={"12"} lg={"6"}>
                    <p className="lh-lg text-wrap">{t("researchHistory:k3")}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/tech-param.png"
                           className="w-100" fluid/>
                </Col>
            </Row>
        </Container>
    )
};

export default ResearchHistory;