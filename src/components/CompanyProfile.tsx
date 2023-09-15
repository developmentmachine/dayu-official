import React from "react";
import Image from 'react-bootstrap/Image';
// import bg from "../static/bg.png";
import {Col, Container, Row} from "react-bootstrap";
import {useTranslation} from "next-i18next";

const CompanyProfile: React.FC<{ id: string }> = (props) => {
    const {t} = useTranslation();
    return (
        <Container className="pt-0" id={props.id}>
            <Row>
                <Col>
                    <Image src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/bg.png" fluid/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="lh-lg text-wrap fw-medium">{t("companyProfile:k1")}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="lh-lg text-wrap">{t("companyProfile:k2")}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="lh-lg text-wrap">{t("companyProfile:k3")}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default CompanyProfile;
