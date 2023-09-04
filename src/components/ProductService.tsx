import React from "react";
import {Card, Container, Row, Col} from "react-bootstrap";
import ps1 from "@/static/ps1.png";
import ps2 from "../static/ps2.png";
import ps3 from "../static/ps3.png";
import ps4_1 from "../static/ps4-1.png";
import ps4_2 from "../static/ps4-2.png";
import ps5 from "../static/ps5.png";
import ps6 from "../static/ps6.png";
import ps7 from "../static/ps7.png";
import Image from "next/image";
import {BigPlayButton, ControlBar, Player} from "video-react";



const ProductService: React.FC<{id:string}> = (props) => {
    return (
        <Container className="" id={props.id}>
                <div className="text-center">
                    <p className="fs-3">高通量换热管生产</p>
                    <p className="text-start">我公司目前主要生产的高通量换热管，该产品具有传热系数高、提高临界热通量、不易结垢、环保、节能降耗，基本不需要维修等优点。</p>
                </div>
                <Row>
                    <Col>
                        <div className="team-member">
                            <Image src={ps1} alt={""} className="mx-auto rounded-circle"/>
                        </div>
                    </Col>
                    <Col>
                        <div className="team-member">
                            <Image src={ps2} alt={""} className="mx-auto rounded-circle"/>
                        </div>
                    </Col>
                </Row>
                <div className="team-member">
                    <p className="text-start">公司下设生产基地（天津高通新材料有限公司）位于天津武清，生产能力为150万延米/年。目前主要产品包括：管内高通量换热管和管外高通量换热管，材质包括碳钢、不锈钢、铜、钛、铝等材质换热管。除光管表面烧结技术外还可在高效换热管表面进行烧结，如：波纹管、波节管、螺纹管、纵翅管等其他高效换热管。</p>
                </div>
                <Row>
                    <Col>
                        <div className="team-member">
                            <Image src={ps3} alt={""} className="mx-auto rounded-circle"/>
                        </div>
                    </Col>
                    <Col>
                        <div className="team-member">
                            <Image src={ps4_1} alt={""} className="mx-auto rounded-circle"/>
                        </div>
                    </Col>
                    <Col>
                        <div className="team-member">
                            <Image src={ps4_2} alt={""} className="mx-auto rounded-circle"/>
                        </div>
                    </Col>
                </Row>
                <div className="">
                    <p className="">我司生产高通量换热管机械性能及多孔层参数，包括孔径、孔隙率、多空层厚度、结合强度经过测试，完全符合《HG/T 4379-2012  烧结型高通量换热管》规定。特别是结合力部分，远超行业标准。</p>
                </div>
                <Row>
                    <Col>
                        <Image src={ps5} alt="相关检验照片" className="display-samples"/>
                    </Col>
                    <p>高通量管纵向对弯180°且曲率半径不大于换热管两倍，弯管段内外侧无多孔层脱落；高通量管压扁≥0.9d时，无多孔层脱落。</p>
                    <Col>
                        <Image src={ps6} alt="高通量管压扁≥0.9d时，无多孔层脱落" className="display-samples"/>
                    </Col>
                    <p>高通量管压扁≥0.9d时，无多孔层脱落。</p>
                    <Col>
                        <div className="">
                            <Image src={ps7} alt="Φ19mm的换热管，管外径≤管外径和厚度正公差之和19.75mm" className="display-samples"/>
                        </div>
                    </Col>
                    <p>Φ19mm的换热管，管外径≤管外径和厚度正公差之和19.75mm。</p>
                </Row>
                <Row>
                    <Col>
                        <Player src="/video/tech.mp4">
                            <BigPlayButton position="center" />
                            <ControlBar autoHide={false} className="my-class" />
                        </Player>
                    </Col>
                </Row>
        </Container>
    )
};
export default ProductService;