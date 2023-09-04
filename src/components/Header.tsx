import React from "react";
import {Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import Logo from "../static/logo.png";

const Header: React.FC = () => {
    return (
        <Navbar expand="lg" fixed={"top"} bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar className="">
                    <Navbar.Brand href="/">
                        <Image className="img-fluid" src={Logo} alt={""} style={{
                            objectFit: "contain",
                            width: "12rem",
                        }}/>
                    </Navbar.Brand>
                </Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end bg-dark">
                    <Nav fill className="me-auto">
                        <Nav.Link href="#companyProfile">公司概况</Nav.Link>
                        <Nav.Link href="#ability">产品与服务</Nav.Link>
                        <Nav.Link href="#researchHistory">技术能力</Nav.Link>
                        <Nav.Link href="#achievement">应用业绩</Nav.Link>
                        <Nav.Link href="#aboutUs">联系我们</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
