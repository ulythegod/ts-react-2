import React, {Component} from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ts4 from '../assets/ts4.jpg'
import ts5 from '../assets/ts5.jpg'
import ts6 from '../assets/ts6.jpg'
import ts7 from '../assets/ts7.jpg'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="leds-tabs-example" defaultActiveKey="bio">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="bio">Biography</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="music">Music</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="movies">Movies</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="facts">Other facts</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="bio">
                                    <img src={ ts4 } width="500px"/>
                                    <p>
                                        Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. 
                                        Her narrative songwriting, which is often inspired by her personal life, has 
                                        received widespread media coverage and critical praise. Born in West Reading, 
                                        Pennsylvania, Swift relocated to Nashville, Tennessee, at the age of 14 to 
                                        pursue a career in country music. She signed a songwriting deal with Sony/ATV 
                                        Music Publishing in 2004 and a recording deal with Big Machine Records in 2005, 
                                        and released her eponymous debut studio album in 2006.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="music">
                                    <img src={ ts5 } width="500px"/>
                                    <p>
                                        <ul>
                                            <li>
                                                Taylor Swift (2006)
                                            </li>
                                            <li>
                                                Fearless (2008)
                                            </li>
                                            <li>
                                                Speak Now (2010)
                                            </li>
                                            <li>
                                                Red (2012)
                                            </li>
                                            <li>
                                                1989 (2014)
                                            </li>
                                            <li>
                                                Reputation (2017)
                                            </li>
                                            <li>
                                                Lover (2019)
                                            </li>
                                            <li>
                                                Folklore (2020)
                                            </li>
                                            <li>
                                                Evermore (2020)
                                            </li>
                                        </ul>
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="movies">
                                    <img src={ ts6 } width="500px"/>
                                    <p>
                                        <ul>
                                            <li>
                                                Hannah Montana: The Movie (2009)
                                            </li>
                                            <li>
                                                CSI: Crime Scene Investigation (2009)
                                            </li>
                                            <li>
                                                Valentine's Day (2010)
                                            </li>
                                            <li>
                                                Journey to Fearless (2010)
                                            </li>
                                            <li>
                                                The Lorax (2012)
                                            </li>
                                            <li>
                                                The Giver (2014)
                                            </li>
                                            <li>
                                                The 1989 World Tour Live (2015)
                                            </li>
                                            <li>
                                                Taylor Swift's Reputation Stadium Tour (2018)
                                            </li>
                                            <li>
                                                City of Lover (2019)
                                            </li>
                                            <li>
                                                Cats (2019)
                                            </li>
                                            <li>
                                                Folklore: The Long Pond Studio Sessions (2020)
                                            </li>
                                        </ul>
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="facts">
                                    <img src={ ts7 } width="500px"/>
                                    <p>
                                        <ul>
                                            <li>
                                                Taylor first worked in musical theater
                                            </li>
                                            <li>
                                                Her Inspiration was Shania Twain
                                            </li>
                                            <li>
                                                She was taught how to play guitar by a computer repairman
                                            </li>
                                            <li>
                                                She once modeled for Abercrombie & Fitch
                                            </li>
                                            <li>
                                                Taylor Swift owns a private jet
                                            </li>
                                            <li>
                                                Taylor Swift grew up on a Christmas tree farm
                                            </li>
                                            <li>
                                                Her dad owns part of her record label
                                            </li>
                                            <li>
                                                Her Favorite Food Is Cheesecake
                                            </li>
                                            <li>
                                                She was the youngest country artist to write a #1 song
                                            </li>
                                            <li>
                                                She loves anything and everything Disney
                                            </li>
                                            <li>
                                                She has dated (and broken up with) a lot of famous dudes
                                            </li>
                                            <li>
                                                The AMA recently named her “Artist of the Decade”
                                            </li>
                                        </ul>
                                    </p>
                                </Tab.Pane>                            
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}