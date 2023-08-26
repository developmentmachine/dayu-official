import React from "react";
import Product from "@/components/Product";
import {Container, Ratio} from "react-bootstrap";
import "node_modules/video-react/dist/video-react.css";
import {BigPlayButton, ControlBar, Player} from "video-react";

const Tech: React.FC<{id:string}> = (props) => {
    return (
        <Container id={props.id}>
            <Player src="/video/tech.mp4">
                <BigPlayButton position="center" />
                <ControlBar autoHide={false} className="my-class" />
            </Player>
        </Container>
    )
};

export default Tech;