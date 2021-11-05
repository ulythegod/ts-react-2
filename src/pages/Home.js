import React, {Component} from "react";
import { Container, Card, Button, CardGroup } from "react-bootstrap";
import CarouselBox from "../components/CarouselBox";
import ts8 from '../assets/ts8.jpg';
import ts9 from '../assets/ts9.jpg';
import ts10 from '../assets/ts10.jpg';

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox />
                <Container>
                    <h2 className="text-center m-4">Latest News</h2>
                    <CardGroup>
                        <Card border="warning" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ ts8 } />
                            <Card.Body>
                                <Card.Title>Taylor in New York</Card.Title>
                                <Card.Text>
                                    Walkin' through a crowd, the village is a glow
                                    Kaleidoscope of loud heartbeats under coats
                                    Everybody here wanted somethin' more
                                    Searchin' for a sound we hadn't heard before
                                </Card.Text>
                                <Button variant="warning">Go to details</Button>
                            </Card.Body>
                        </Card>
                        <Card border="warning" style={{ width: '18rem' }}>    
                            <Card.Body>
                                <Card.Title>Taylor in New York</Card.Title>
                                <Card.Text>
                                    Walkin' through a crowd, the village is a glow
                                    Kaleidoscope of loud heartbeats under coats
                                    Everybody here wanted somethin' more
                                    Searchin' for a sound we hadn't heard before
                                </Card.Text>
                                <Button variant="warning">Go to details</Button>
                            </Card.Body>
                            <Card.Img variant="bottom" src={ ts9 } />
                        </Card>
                        <Card border="warning" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ ts10 } />
                            <Card.Body>
                                <Card.Title>Taylor in New York</Card.Title>
                                <Card.Text>
                                    Walkin' through a crowd, the village is a glow
                                    Kaleidoscope of loud heartbeats under coats
                                    Everybody here wanted somethin' more
                                    Searchin' for a sound we hadn't heard before
                                </Card.Text>
                                <Button variant="warning">Go to details</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </>
        )
    }
}