import React, {Component} from "react";
import { Container, Form, Button } from "react-bootstrap";

export default class Contacts extends Component {
    render() {
        return (
            <Container style={{ width: '500px' }}>
                <h1 className="text-center">Write to Taylor</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"></Form.Control>
                        <Form.Text>Taylor will recieve your message</Form.Text>                        
                    </Form.Group>
                    <Form.Group controlId="formBasicMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="3"></Form.Control>                      
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />                     
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        )
    }
}