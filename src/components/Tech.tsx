import React from "react";
import Product from "@/components/Product";
import {Card, Container, Ratio, Row} from "react-bootstrap";
import "node_modules/video-react/dist/video-react.css";
import {BigPlayButton, ControlBar, Player} from "video-react";
import Image from "react-bootstrap/Image";
import timeline from "../static/timeline.png";
import techParam from "../static/tech-param.png";

const Tech: React.FC<{id:string}> = (props) => {
    return (
        <Container fluid className="pt-5 mt-5" id={props.id}>
            <Image src={timeline.src} fluid/>
            <Row>
                <h6>我公司关于高通量换热管的研发，于2012年开始进行自主研发。后至2017年开始先后与北京科技大学、西安交通大学对高通量换热管进行合作开发，最终在西安交通大学技术人员相关专利授权及技术支持下，于2017年完成生产试制，同年首批换热管投产使用。同时我公司对该生产工艺进行了专利申请，于2019年获得该相应国家专利。 公司针对所生产高通量换热管的传热性能，分别于2019年在北京科技大学新材料研究院和2021年在西安交通大学能源与动力工程学院热流科学与工程教育部重点实验室分别对我公司产品进行性能测试。众所周知，北京科技大学和西安交通大学均为我国一流高校，尤其西安交通大学能源与动力工程学院热流科学与工程教育部重点实验室是教育部2010年11月下发文（教技函[2010]98号）正式获准立项建设的教育部重点实验室，并与2011年5月11日通过建设计划论证，2013年1月29日通过由教育部组织的专家验收。实验室现由59位固定人员组成，包括教授33人，副教授20人，讲师2人，实验技术人员4人。其中拥有中国科学院院士2名。实验结果表明我公司产品相对于普通光管在同工况下传热系数可以提高1.5-8倍。附图为我公司在两所高校所做传热测试检测报告。 我公司拥有一支经验丰富的选型设计团队，同时依托西安交通大学等高校、团队，利用合作伙伴提供的选型软件，如HTRI等计算软件对设备进行相关选型设计。</h6>
            </Row>
            <Row>
                <p>1.给定的工艺条件下的换热计算：通过初算传热面积，计算管程和壳程流体的流动阻力复核计算是否符合工艺条件，再次复核传热面积的这样的步骤，在给定工况下，根据不同高效换热器强化特点，给出最优的设计方案，在满足换热器负荷条件下，提高经济性能，增加换热器的使用寿命。</p>
            </Row>
            <Image src={techParam.src} fluid/>
            <Row>
                <p>2.优化换热器的设计参数： 在工艺设计阶段或节能改造项目中，针对不同高效换热器性能（如高通量管可在小温差下沸腾的特点），可以通过选型计算，利用低品位热源替代高品位热源，大幅度减少热源消耗，从而达到冷、热能源的节能减排，对现场装置的换热经济性能显著优化。</p>
            </Row>

        </Container>
    )
};

export default Tech;