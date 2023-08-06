import React from "react";
import {Carousel} from "react-bootstrap";
import Image from "next/image";
import bg from "../static/bg.jpg";

const Highlight: React.FC<{ id: string }> = (props) => {
    return (
        <section>
            <Carousel data-bs-theme="dark" id={props.id}>
                <Carousel.Item>
                    <Image src={bg} alt={""}/>
                    <Carousel.Caption>
                        <h5>北京大誉环保科技有限公司</h5>
                        <p>成立于2009年，是一家专注于环保产品和高效换热产品研究、开发、生产及销售的高科技企业，总部设立于北京，下设生产基地位于天津武清，公司技术和研发实力雄厚，是国家认定的“高新技术企业”，拥有多项国家专利。</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=eee"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h5>Second slide label</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=e5e5e5"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h5>Third slide label</h5>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    );
};

export default Highlight;
