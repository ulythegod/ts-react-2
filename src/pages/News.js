import React, {Component} from "react";
import { Col, Container, Row, Card, Button, ListGroup } from "react-bootstrap";
import ts10 from '../assets/ts10.jpg';

export default class News extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Card className="m-5">
                            <Card.Body>
                                <Card.Title>Taylor Swift Locks Down Jimmy Fallon, Seth Meyers Appearances for ‘Red’ Release Night</Card.Title>
                                <Card.Text>
                                    Taylor Swift will be doing a lot of late-night promotion for next week’s “Red (Taylor’s Version)” 
                                    album, and so far she’s keeping it all in the NBC family. Social media posts Thursday from Jimmy 
                                    Fallon and Seth Meyers or their shows revealed that Swift will be appearing back-to-back with 
                                    both hosts on the night of Nov. 11, right around the hour “Red” is being digitally launched.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={ ts10 } />
                        </Card>
                        <Card className="m-5">
                            <Card.Body>
                                <Card.Title>Taylor Swift Locks Down Jimmy Fallon, Seth Meyers Appearances for ‘Red’ Release Night</Card.Title>
                                <Card.Text>
                                    Taylor Swift will be doing a lot of late-night promotion for next week’s “Red (Taylor’s Version)” 
                                    album, and so far she’s keeping it all in the NBC family. Social media posts Thursday from Jimmy 
                                    Fallon and Seth Meyers or their shows revealed that Swift will be appearing back-to-back with 
                                    both hosts on the night of Nov. 11, right around the hour “Red” is being digitally launched.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={ ts10 } />
                        </Card>
                        <Card className="m-5">
                            <Card.Body>
                                <Card.Title>Taylor Swift Locks Down Jimmy Fallon, Seth Meyers Appearances for ‘Red’ Release Night</Card.Title>
                                <Card.Text>
                                    Taylor Swift will be doing a lot of late-night promotion for next week’s “Red (Taylor’s Version)” 
                                    album, and so far she’s keeping it all in the NBC family. Social media posts Thursday from Jimmy 
                                    Fallon and Seth Meyers or their shows revealed that Swift will be appearing back-to-back with 
                                    both hosts on the night of Nov. 11, right around the hour “Red” is being digitally launched.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={ ts10 } />
                        </Card>
                        <Card className="m-5">
                            <Card.Body>
                                <Card.Title>Taylor Swift Locks Down Jimmy Fallon, Seth Meyers Appearances for ‘Red’ Release Night</Card.Title>
                                <Card.Text>
                                    Taylor Swift will be doing a lot of late-night promotion for next week’s “Red (Taylor’s Version)” 
                                    album, and so far she’s keeping it all in the NBC family. Social media posts Thursday from Jimmy 
                                    Fallon and Seth Meyers or their shows revealed that Swift will be appearing back-to-back with 
                                    both hosts on the night of Nov. 11, right around the hour “Red” is being digitally launched.
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src={ ts10 } />
                        </Card>
                    </Col>
                    <Col className="mt-3" md="3">
                        <h5>Categotias</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Music</ListGroup.Item>
                                <ListGroup.Item>Interviews</ListGroup.Item>
                                <ListGroup.Item>Posts</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3" bg="light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Taylor Swift will be doing a lot of late-night promotion for next week’s “Red (Taylor’s Version)” 
                                    album, and so far she’s keeping it all in the NBC family. Social media posts Thursday from Jimmy 
                                    Fallon and Seth Meyers or their shows revealed that Swift will be appearing back-to-back with 
                                    both hosts on the night of Nov. 11, right around the hour “Red” is being digitally launched.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}