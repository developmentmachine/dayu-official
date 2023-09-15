import React, {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {useTranslation} from "next-i18next";
import {BsTelephoneInboundFill} from "react-icons/bs";
import {FaMapLocation} from "react-icons/fa6";

const Footer: React.FC<{ id: string }> = (props) => {
    const {t} = useTranslation()
    const [clicked, setClicked] = useState({clicked: false})
    const navClassName = clicked ? "active" : ""
    const [currentNav, setCurrentNav] = useState('')
    const clickNavItem = (e) => {
        setClicked({clicked: true})
        setCurrentNav(e.currentTarget.getAttribute("href"))
    }
    return (
        <Container className="Light text-center" id={props.id}>
            <footer className="justify-content-between align-items-center border-top pt-5 mt-5">
                <Row>
                    {/*<Col md={"6"} lg={"6"}>
                        <Nav defaultActiveKey="#companyProfile" className="flex-column">
                            <Nav.Link className={navClassName} href="#companyProfile"
                                      onClick={(e) => clickNavItem(e)}>{t("header:companyProfile")}</Nav.Link>
                            <Nav.Link className={navClassName} href="#ability">{t("header:productService")}</Nav.Link>
                            <Nav.Link className={navClassName}
                                      href="#researchHistory">{t("header:techCapability")}</Nav.Link>
                            <Nav.Link className={navClassName} href="#achievement">{t("header:achievement")}</Nav.Link>
                            <Nav.Link className={navClassName} href="#aboutUs">{t("header:contactUs")}</Nav.Link>
                        </Nav>
                    </Col>*/}
                    <Col>
                        <Row>
                            <Col md={"12"} lg={"6"}>
                                <h5><BsTelephoneInboundFill/> {t("footer:tel")}</h5>
                                <p>010-86485278</p>
                            </Col>
                            <Col md={"12"} lg={"6"}>
                                <h5><FaMapLocation/> {t("footer:addr")}</h5>
                                <p>{t("footer:address")}</p>
                            </Col>
                        </Row>
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
