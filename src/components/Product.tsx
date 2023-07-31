import React from "react";
import {Button, Card, Col, Container, Row } from "react-bootstrap";

const Product: React.FC = () => {
    return (
        <Row xs={1} md={2} className="bg-light" style={{
            marginTop: "1rem"
        }}>
            <Col>
                <Card className="bg-light">
                    <Card.Header>管外高通量</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
};
export default Product;