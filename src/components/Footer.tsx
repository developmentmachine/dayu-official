import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useTranslation} from "next-i18next";

const Footer: React.FC<{id:string}> = (props) => {
    const { t } = useTranslation();
    return (
        <Container className="Light text-center" id={props.id}>
            <footer className="justify-content-between align-items-center border-top pt-5 mt-5">
                <Row>
                    <Col>
                        <h5>{t("footer:tel")}</h5>
                        <p>010-86485278</p>
                    </Col>
                    <Col>
                        <h5>{t("footer:addr")}</h5>
                        <p>{t("footer:address")}</p>
                    </Col>
                </Row>
                <Row>
                    <div className="small text-muted">Copyright &copy; 2009–2023 - {t("footer:copyright")}</div>
                </Row>
            </footer>
        </Container>
    );
};

export default Footer;
