
import React from "react";
import { Topnavbar } from '../../components/Topnavbar/Topnavbar'
import { Sidenav } from '../../components/Sidenav/Sidenav'
import { Tabs, Col, Tab, Row, Container, Button } from 'react-bootstrap';
import './Createvideo.scss';
import ReactAudioPlayer from 'react-audio-player';
import { Accordion } from 'react-bootstrap-accordion';

const Createvideo = () => {
    return (
        <>
            <Topnavbar />
            <Sidenav />
            <Container className="mt-3">
                <Row>
                    <Col xs={6} md={6}>
                        <div className="video-container">
                            <img src="./assets/man.jpg" alt="mainimg"></img>
                            <Button className="preview-btn">Preview</Button>

                            <div className="descritpion-box">
                                <p>Type or paste your videoscript here. You can also request a translation of an English script to any of 27 other languages</p>
                                <Button className="listen-btn">Listen</Button>
                            </div>
                        </div>
                    </Col>

                    <Col xs={6} md={6}>
                        <Tabs defaultActiveKey="actor" id="uncontrolled-tab-example">
                            <Tab eventKey="actor" title="Actor">
                                <Row className="text-center">
                                    <Col md={4} className="mb-2">
                                        <img src="./assets/girl.png" alt="actorimg"></img>
                                        <span>Anna</span>
                                    </Col>
                                    <Col md={4}>
                                        <img src="./assets/girl1.jpg" alt="actorimg1"></img>
                                        <span>YoYo</span>
                                    </Col>
                                    <Col md={4}>
                                        <img src="./assets/girl2.jpg" alt="actorimg2"></img>
                                        <span>Skye</span>
                                    </Col>
                                </Row>

                                <Row className="text-center">
                                    <Col md={4} className="mb-2">
                                        <img src="./assets/man.jpg" alt="actorimg3"></img>
                                        <span>Mike</span>
                                    </Col>
                                    <Col md={4}>
                                        <img src="./assets/man1.jpg" alt="actorimg4"></img>
                                        <span>Jon</span>
                                    </Col>
                                    <Col md={4}>
                                        <img src="./assets/man3.jpg" alt="actorimg5"></img>
                                        <span>Peter</span>
                                    </Col>
                                </Row>
                                <Row className="text-center">
                                    <Col md={4}>
                                        <img src="./assets/girl3.jpg" alt="actorimg6"></img>
                                        <span>Jenny</span>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="voice" title="Voice">
                                <ReactAudioPlayer
                                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3"
                                    controls
                                />
                                <ReactAudioPlayer
                                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3"
                                    controls
                                />
                                <ReactAudioPlayer
                                    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
                                    controls
                                />
                            </Tab>
                            <Tab eventKey="alignment" title="Alignment">
                                <div className="align-btn">
                                    <Button>Left</Button>
                                    <Button>Center</Button>
                                    <Button>Right</Button>
                                </div>
                            </Tab>
                            <Tab eventKey="background" title="Background">
                                <Accordion show title="Images">
                                    <Row className="text-center">
                                        <Col md={4} className="mb-2">
                                            <img src="./assets/bg1.jpg" alt="bgimg1"></img>
                                            <span>Office</span>
                                        </Col>
                                        <Col md={4}>
                                            <img src="./assets/bg2.jpg" alt="bgimg2"></img>
                                            <span>Space</span>
                                        </Col>
                                        <Col md={4}>
                                            <img src="./assets/bg3.jpg" alt="bgimg3"></img>
                                            <span>Noise</span>
                                        </Col>
                                    </Row>

                                    <Row className="text-center">
                                        <Col md={4} className="mb-2">
                                            <img src="./assets/bg4.jpg" alt="bgimg4"></img>
                                            <span>Meeting Room</span>
                                        </Col>
                                        <Col md={4}>
                                            <img src="./assets/bg5.jpg" alt="bgimg5"></img>
                                            <span>Books</span>
                                        </Col>
                                        <Col md={4}>
                                            <img src="./assets/bg6.jpg" alt="bgimg6"></img>
                                            <span>Desk</span>
                                        </Col>
                                    </Row>
                                    <Row className="text-center">
                                        <Col md={4}>
                                            <img src="./assets/bg7.jpg" alt="bgimg7"></img>
                                            <span>Nature</span>
                                        </Col>
                                    </Row>
                                </Accordion>
                                <Accordion title="Solid Colours">
                                </Accordion>
                                <Accordion title="Videos">
                                </Accordion>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Createvideo;