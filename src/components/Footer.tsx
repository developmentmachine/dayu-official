import React from "react";
import {Col, Container, Row} from "react-bootstrap";

const Footer: React.FC<{id:string}> = (props) => {
    return (
        <Container fluid className="Light text-center" id={props.id}>
            <footer className="justify-content-between align-items-center border-top pt-5 mt-5">
                <Row>
                    <Col>
                        <h5>电话</h5>
                        <p>010-86485278</p>
                    </Col>
                    <Col>
                        <h5>地址</h5>
                        <p>北京市昌平区马池口镇白浮村2号晴空科技院内</p>
                    </Col>
                </Row>
                <Row>
                    <div className="small text-muted">Copyright &copy; 2009–2023 - 北京大誉环保科技有限公司</div>
                </Row>
            </footer>
        </Container>
    );
};

export default Footer;
