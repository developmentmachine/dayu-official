import React from "react";
import {Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import Logo from "../static/logo.png";

const Header: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >
            <Container>
                <Navbar className="">
                    <Navbar.Brand href="/">
                        <Image className="img-fluid" src={Logo} alt={""} style={{
                            objectFit: "contain",
                            width: "200px",
                        }}/>
                    </Navbar.Brand>
                </Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#companyProfile">公司概况</Nav.Link>
                        <Nav.Link href="#companyProfile">研发历史</Nav.Link>
                        <Nav.Link href="#products">产品与服务</Nav.Link>
                        <Nav.Link href="#ability">技术能力</Nav.Link>
                        <Nav.Link href="#achievement">应用业绩</Nav.Link>
                        <Nav.Link href="#contact">联系我们</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
