import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import ts1 from '../assets/ts1.jpg'
import ts2 from '../assets/ts2.jpg'
import ts3 from '../assets/ts3.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ ts1 }
                        alt="Taylor Swift"
                    />
                    <Carousel.Caption>
                        <h3>Taylor Swift</h3>
                        <p>Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ ts2 }
                        alt="Taylor Swift"
                    />
                    <Carousel.Caption>
                        <h3>Taylor Swift</h3>
                        <p>Her narrative songwriting, which is often inspired by her personal life, has received widespread media coverage and critical praise.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ ts3 }
                        alt="Taylor Swift"
                    />
                    <Carousel.Caption>
                        <h3>Taylor Swift</h3>
                        <p>Born in West Reading, Pennsylvania, Swift relocated to Nashville, Tennessee, at the age of 14 to pursue a career in country music.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
