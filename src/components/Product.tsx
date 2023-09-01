import React from "react";
import {Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import ps1 from "../static/ps1.png";
import ps2 from "../static/ps2.png";
import ps3 from "../static/ps3.png";
import ps4 from "../static/ps4.png";
import ps5 from "../static/ps5.png";
import ps6 from "../static/ps6.png";
import ps7 from "../static/ps7.png";


const Product: React.FC<{}> = (props) => {
    return (
        <Container fluid className="pt-5 mt-5">
            <Row xs={1} md={2} className="bg-body" style={{
                marginTop: "1rem"
            }}>
                <Col>
                    <Card className="mb-4">
                        <Image src={ps1} alt={""} className="card-img-top"/>
                        <Card.Body>
                            <Card.Title>高通量换热管生产</Card.Title>
                            <Card.Text>
                                我公司目前主要生产的高通量换热管，该产品具有传热系数高、提高临界热通量、不易结垢、环保、节能降耗，基本不需要维修等优点。 高通量管即在光管或其他高效换热管表面采用粉末冶金的方法在表面烧结一薄层具有特定结构的多孔表面高效换热管。
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="mb-4">
                        <a href="#!"><img className="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..."/></a>
                        <Card.Body>
                            <div className="small text-muted">January 1, 2023</div>
                            <Card.Title>Featured Post Title</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita
                                corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
                            </Card.Text>
                            <a className="btn btn-primary" href="#!">Read more →</a>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
};
export default Product;