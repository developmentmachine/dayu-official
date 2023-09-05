import React, {useEffect, useState} from "react";
import Product from "@/components/Product";
import {Card, Container, Ratio, Row} from "react-bootstrap";
import "node_modules/video-react/dist/video-react.css";
import {BigPlayButton, ControlBar, Player} from "video-react";
import Image from "react-bootstrap/Image";
import timeline from "../static/timeline.png";
import timeline2 from "../static/timeline2.png";
import techParam from "../static/tech-param.png";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

const ResearchHistory: React.FC<{id:string}> = (props) => {
    const {t} = useTranslation();
    const [imageSrc, setImageSrc] = useState(timeline);
    const router = useRouter();
    useEffect(() => {
        console.log("uri -> "+router.locale)
        if(router.locale && router.locale ==="en"){
            setImageSrc(timeline2)
        }else{
            setImageSrc(timeline)
        }
    }, [router.locale]);
    return (
        <Container className="" id={props.id}>
            <Row>
                <Image src={imageSrc.src} fluid/>
            </Row>
            <Row>
                <p className="lh-lg text-wrap fw-medium">{t("researchHistory:k1")}</p>
            </Row>
            <Row>
                <p className="lh-lg text-wrap">{t("researchHistory:k2")}</p>
            </Row>
            <Row>
                <Image src={techParam.src} fluid className="mb-4"/>
            </Row>
            <Row>
                <p className="lh-lg text-wrap">{t("researchHistory:k3")}</p>
            </Row>

        </Container>
    )
};

export default ResearchHistory;