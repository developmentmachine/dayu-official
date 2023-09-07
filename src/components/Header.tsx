import React, {useEffect, useState} from "react";
import {Container, Nav, Navbar, ToggleButton} from "react-bootstrap";
import Image from "next/image";
import Logo from "../static/logo.png";
import i18next from "i18next";
import {useTranslation} from "next-i18next";
import Link from "next/link";
import {useRouter} from "next/router";

const Header: React.FC = () => {
    const { t } = useTranslation();
    const router = useRouter();

    const [radioValue, setRadioValue] = useState('1');

    useEffect(() => {
        console.log(router.asPath)
        if(router.asPath && router.asPath.startsWith("/#")){
            router.replace("/")
        }
        if(radioValue === '1' && router.locale !== 'zh'){
            router.replace(router.asPath, router.asPath, { locale: 'zh'})
            router.locale = 'zh'
        }else if(radioValue === '2' && router.locale !== 'en'){
            router.replace(router.asPath, router.asPath, { locale: 'en'})
            router.locale = 'en'
        }
    }, [radioValue]);


    const locales = [
        { name: '中', value: '1' },
        { name: 'En', value: '2' },
    ];
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
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end bg-dark position-relative">
                <Nav variant="underline" defaultActiveKey="#companyProfile">
                    <Nav.Item>
                        <Nav.Link href="#companyProfile">{t("header:companyProfile")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#ability">{t("header:productService")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#researchHistory">{t("header:techCapability")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#achievement">{t("header:achievement")}</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#aboutUs">{t("header:contactUs")}</Nav.Link>
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
