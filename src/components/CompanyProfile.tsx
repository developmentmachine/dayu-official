import React from "react";
import Image from 'react-bootstrap/Image';
// import bg from "../static/bg.png";
import {Container, Row} from "react-bootstrap";
import {useTranslation} from "next-i18next";

const CompanyProfile: React.FC<{ id: string }> = (props) => {
    const {t} = useTranslation();
    return (
        <Container fluid className="pt-0" id={props.id}>
            <Row>
                <Image src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/bg.png" fluid
                       className="mb-4"/>
            </Row>
            <Row>
                <p className="lh-lg text-wrap fw-medium">{t("companyProfile:k1")}</p>
                <p className="lh-lg text-wrap">{t("companyProfile:k2")}</p>
                <p className="lh-lg text-wrap">{t("companyProfile:k3")}</p>
            </Row>
        </Container>
    );
};

export default CompanyProfile;
