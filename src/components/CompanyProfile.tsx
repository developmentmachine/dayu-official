import React from "react";
import Image from 'react-bootstrap/Image';
import bg from "../static/bg.png";
import {Card, Container, Row} from "react-bootstrap";

const CompanyProfile: React.FC<{ id: string }> = (props) => {
    return (
            /*<div className="masthead main-title" id={props.id}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="mask">
                            <h1 className="text-white font-weight-bold">北京大誉环保科技有限公司</h1>
                            <div className="align-self-baseline">
                                <p>成立于2009年，是一家专注于环保产品和高效换热产品研究、开发、生产及销售的高科技企业，总部设立于北京，下设生产基地位于天津武清，公司技术和研发实力雄厚，是国家认定的“高新技术企业”，拥有多项国家专利。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>*/
        <Container className="" id={props.id}>
            <Row>
                <Image src={bg.src} fluid className="mb-4"/>
            </Row>
            <Row>
                <p className="lh-lg text-wrap fw-medium">北京大誉环保科技有限公司成立于2009年，是一家专注于环保产品和高效换热产品研究、开发、生产及销售的高科技企业，总部设立于北京，下设生产基地位于天津武清，公司技术和研发实力雄厚，是国家认定的“高新技术企业”，拥有多项国家专利。</p>
                <p className="lh-lg text-wrap">多年来公司始终致力于各种强化换热元器件的研发。公司拥有专业高效换热器设计团队，采用设计软件与应用经验相结合的设计理念，充分发挥高效换热器节能降耗的特色，为用户减小设备大小，降低设备成本同时利用节能降耗技术为用户节约生产成本。</p>
                <p className="lh-lg text-wrap">高通量换热管等强化换热管作为我公司近年主营产品，是与西安交通大学、北京科技大学等多所高校合作研发，相关产品也在北京科技大学及西安交通大学实验室进行检测，强化效果显著。</p>
            </Row>
        </Container>
    );
};

export default CompanyProfile;
