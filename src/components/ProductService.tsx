import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
// import ps1 from "@/static/ps1.png";
// import ps2 from "../static/ps2.png";
// import ps3 from "../static/ps3.png";
// import ps4_1 from "../static/ps4-1.png";
// import ps4_2 from "../static/ps4-2.png";
// import ps5 from "../static/ps5.png";
// import ps6 from "../static/ps6.png";
// import ps7 from "../static/ps7.png";
// import Image from "next/image";
// import {BigPlayButton, ControlBar, Player} from "video-react";
import {useTranslation} from "next-i18next";


const ProductService: React.FC<{ id: string }> = (props) => {
    const {t} = useTranslation();
    return (
        <Container id={props.id}>
            <Row>
                <Col>
                    <p className="h2 text-center">{t("productService:title")}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-start">{t("productService:k1")}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="team-member">
                        <Image src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/ps1.png"
                               className="mx-auto rounded-circle"/>
                    </div>
                </Col>
                <Col>
                    <div className="team-member">
                        <Image src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/ps2.png"
                               className="mx-auto rounded-circle"/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="text-start">{t("productService:k2")}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="team-member">
                        <Image src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/ps3.png"
                               className="mx-auto rounded-circle"/>
                    </div>
                </Col>
                <Col>
                    <div className="team-member">
                        <Image src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/ps4-1.png"
                               className="mx-auto rounded-circle"/>
                    </div>
                </Col>
                <Col>
                    <div className="team-member">
                        <Image src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/ps4-2.png"
                               className="mx-auto rounded-circle"/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{t("productService:k3")}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/ps5.png"
                           className="display-samples w-100"/>
                    <p>{t("productService:k4")}</p>
                </Col>
            </Row>
            <Row>
                <Col md={"12"} lg={"6"}>
                    <Image src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/ps6.png"
                           className="display-samples"/>
                    <p>{t("productService:k5")}</p>
                </Col>
                <Col md={"12"} lg={"6"}>
                    <div className="">
                        <Image src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/image/ps7.png"
                               className="display-samples"/>
                    </div>
                    <p>{t("productService:k6")}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/*<Player
                        src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/video/demo.mp4"
                        autoPlay={true}>
                        <BigPlayButton position="center"/>
                        <ControlBar autoHide={false} className="my-class"/>
                    </Player>*/}
                    <video controls={true} autoPlay={true} loop={true} className="w-100 h-auto">
                        <source src="https://dayu-app-1320376356.cos.ap-beijing.myqcloud.com/video/demo.mp4"/>
                    </video>
                </Col>
            </Row>
        </Container>
    )
};
export default ProductService;