import React, {Component} from "react";
import { Container, Form, FormControl, Nav, Navbar, Button, Row, Col} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from './logo.png'
import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import News from "../pages/News";

export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="light" variant="light">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                alt="Logo"
                                className="d-inline-block align-top"
                            /> Taylor Swift Fan Site
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About Taylor</Nav.Link>
                                <Nav.Link href="/contacts">Contacts</Nav.Link>
                                <Nav.Link href="/news">News</Nav.Link>
                            </Nav>
                            <Form>
                                <Row className="align-items-xl-end">
                                    <Col sm={6} className="my-1">
                                        <Form.Control
                                            inline="true"                                        
                                            type="text" 
                                            placeholder="Search"                                           
                                        />
                                    </Col>
                                    <Col sm={5} className="my-1">
                                        <Button 
                                            variant="warning" 
                                            type="submit"
                                            inline="true"
                                        >
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/about" component={About}/>
                        <Route exact path="/contacts" component={Contacts}/>
                        <Route exact path="/news" component={News}/>
                    </Switch>
                </Router>
            </>
        )
    }
}