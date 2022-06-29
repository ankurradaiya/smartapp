
import React from "react";
import { Homevideo } from '../../components/Topnavbar/Homevideo'
import { Sidenav } from '../../components/Sidenav/Sidenav'
import { Row,Col, Container } from 'react-bootstrap';
import './Home.scss';

const Home = () => {
    return (
        <>
            <Homevideo />
            <Sidenav />
            <Container>
                <Row>
                    <Col sm={4}>
                       <div className="list-boxs">
                        {/* <span className="dots"></span> */}
                        <img  className="list-box-img" src="./assets/man.jpg" alt="imglist"></img>
                        <span className="list-txt">Saying Hi to users!</span>
                        <div className="list-tag">
                            <span className="list-tags">Email</span>
                            <span className="list-tags">Marketing</span>
                            <span className="list-tags">Greeting</span>
                        </div>
                       </div>
                    </Col>
                    <Col sm={4}>
                       <div className="list-boxs">
                        {/* <span className="dots"></span> */}
                        <img  className="list-box-img" src="./assets/girl.png" alt="imglist"></img>
                        <span className="list-txt">Saying Hi to users!</span>
                        <div className="list-tag">
                            <span className="list-tags">Email</span>
                            <span className="list-tags">Marketing</span>
                            <span className="list-tags">Greeting</span>
                        </div>
                       </div>
                    </Col>
                    <Col sm={4}>
                       <div className="list-boxs">
                        {/* <span className="dots"></span> */}
                        <img  className="list-box-img" src="./assets/man1.jpg" alt="imglist"></img>
                        <span className="list-txt">Saying Hi to users!</span>
                        <div className="list-tag">
                            <span className="list-tags">Email</span>
                            <span className="list-tags">Marketing</span>
                            <span className="list-tags">Greeting</span>
                        </div>
                       </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home;