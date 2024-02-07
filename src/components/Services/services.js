import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import '../../assets/style/scss/services.scss';
import Images from '../../assets/Images/handsservices.svg';
import MobileApp from '../../assets/Images/mobile-app.svg';


function Services() {
    return (
        <div className='services-container'>
            <Row>
                <div className='col-12 col-md-4 service-image'>
                    <Row className='d-block'>
                        <img src={Images} alt="closebanner" />
                    </Row>
                </div>
                <div className='col-12 col-md-8 service-text'>
                    <Row>
                        <h1>
                            We Help <br />Clients Make Faster
                        </h1>
                        <h2>Smarter Decisions.</h2>
                    </Row>
                </div>
            </Row>
            <Row>
                <Tab.Container id="services-tab" defaultActiveKey="first">
                        <Col sm={12}>
                            <Nav variant="pills" className="services-tabs">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Website Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Mobile App</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Logo Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">CRM Development</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">E-Commerce Development</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={12}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" className='services-tab-details'>
                                    <div className='col-12 col-md-12'>
                                        <Row>
                                            <div className='col-12 col-md-7'>
                                                <Row>
                                                    <h2>Clients Make
                                                        <br />
                                                        Faster,</h2>
                                                </Row>
                                            </div>
                                            <img src={MobileApp} alt="mobile-app" />
                                            {/* <div className='col-12 col-md-5'>
                                                <Row className='d-block'>
                                                    
                                                </Row>
                                            </div> */}
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className='services-tab-details'>
                                    <div className='col-12 col-md-12'>
                                        <Row>
                                            <div className='col-12 col-md-7'>
                                                <Row>
                                                    <h2>Clients Make
                                                        <br />
                                                        Faster,</h2>
                                                </Row>
                                            </div>
                                            <div className='col-12 col-md-5'>
                                                <Row className='d-block'>
                                                    <img src={MobileApp} alt="mobile-app" />
                                                </Row>
                                            </div>
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className='services-tab-details'>
                                    <div className='col-12 col-md-12'>
                                        <Row>
                                            <div className='col-12 col-md-7'>
                                                <Row>
                                                    <h2>Clients Make
                                                        <br />
                                                        Faster,</h2>
                                                </Row>
                                            </div>
                                            <div className='col-12 col-md-5'>
                                                <Row className='d-block'>
                                                    <img src={MobileApp} alt="mobile-app" />
                                                </Row>
                                            </div>
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth" className='services-tab-details'>
                                    <div className='col-12 col-md-12'>
                                        <Row>
                                            <div className='col-12 col-md-7'>
                                                <Row>
                                                    <h2>Clients Make
                                                        <br />
                                                        Faster,</h2>
                                                </Row>
                                            </div>
                                            <div className='col-12 col-md-5'>
                                                <Row className='d-block'>
                                                    <img src={MobileApp} alt="mobile-app" />
                                                </Row>
                                            </div>
                                        </Row>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth" className='services-tab-details'>
                                    <div className='col-12 col-md-12'>
                                        <Row>
                                            <div className='col-12 col-md-7'>
                                                <Row>
                                                    <h2>Clients Make
                                                        <br />
                                                        Faster,</h2>
                                                </Row>
                                            </div>
                                            <div className='col-12 col-md-5'>
                                                <Row className='d-block'>
                                                    <img src={MobileApp} alt="mobile-app" />
                                                </Row>
                                            </div>
                                        </Row>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                </Tab.Container>
            </Row>
        </div>
    )
}

export default Services