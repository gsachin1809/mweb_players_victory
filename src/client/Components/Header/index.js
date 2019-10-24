// Imports
import React ,{ PureComponent } from 'react'
import { connect } from 'react-redux'

import { styles } from './style.js'
import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import {Navbar , Nav , Form ,Button , FormControl, Row, Col} from "react-bootstrap";


export class Header extends PureComponent {

    render() {
      return ( <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Row>
                  <Col>
                    <Nav className="mr-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#features">Features</Nav.Link>
                      <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                  </Col>

                  <Col>
                    <Form>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-light"></Button>
                    </Form>
                  </Col>
                </Row>
              </Navbar>)
    }


}
