import React, {useEffect, useState} from "react";
import {Nav, Navbar, ToggleButton} from "react-bootstrap";
import Image from "next/image";
import Logo from "../static/logo.png";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

const Header: React.FC = () => {
    const {t} = useTranslation();
    const router = useRouter();

    const [radioValue, setRadioValue] = useState('1');
    const [currentNav, setCurrentNav] = useState('');

    useEffect(() => {
        if (router.asPath && router.asPath.startsWith("/#")) {
            console.log("/#")
            router.push("/", "/", {locale: 'zh'})
        }
        if (radioValue === '1' && router.locale !== 'zh') {
            console.log("route to zh")
            router.push("/" + currentNav, "/" + currentNav, {locale: 'zh'})
            router.locale = 'zh'
        } else if (radioValue === '2' && router.locale !== 'en') {
            console.log("route to en")
            router.push("/" + currentNav, "/" + currentNav, {locale: 'en'})
            router.locale = 'en'
        }
    }, [radioValue]);

    const locales = [
        {name: '中', value: '1'},
        {name: 'En', value: '2'},
    ];

    const clickNavItem = (e) => {
        setCurrentNav(e.currentTarget.getAttribute("href"))
    }
    return (
        <Navbar expand="lg" fixed={"top"} bg="dark" data-bs-theme="dark">
            <Navbar className="">
                <Navbar.Brand href="/">
                    <Image className="img-fluid" src={Logo} alt={""} style={{
                        objectFit: "contain",
                        width: "12rem",
                    }}/>
                </Navbar.Brand>
            </Navbar>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end bg-dark position-relative">
                <Nav variant="underline" defaultActiveKey="#companyProfile">
                    <Nav.Item>
                        <Nav.Link href="#companyProfile"
                                  onClick={(e) => clickNavItem(e)}>{t("header:companyProfile")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#ability"
                                  onClick={(e) => clickNavItem(e)}>{t("header:productService")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#researchHistory"
                                  onClick={(e) => clickNavItem(e)}>{t("header:techCapability")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#achievement"
                                  onClick={(e) => clickNavItem(e)}>{t("header:achievement")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#aboutUs" onClick={(e) => clickNavItem(e)}>{t("header:contactUs")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        {locales.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
