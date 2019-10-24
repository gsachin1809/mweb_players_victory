// Imports
import React ,{ PureComponent } from 'react'
import { connect } from 'react-redux'

import { styles } from './style.js'
import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import {Navbar , Nav , Form ,Button , FormControl, Row, Col} from "react-bootstrap";


export class Footer extends PureComponent {

    render() {
      return (<div>
                <Container>
                  <Row>
                    <Col>
                        <ul>
                          <li>About us</li>
                          <li>Contact us</li>
                        </ul>
                    </Col>
                  </Row>
                </Container>
              </div>)
    }


}
