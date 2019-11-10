// Imports
import React ,{ PureComponent } from 'react'
import { connect } from 'react-redux'

import { styles } from './style.js'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import {Navbar , Nav , Form ,Button , FormControl, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom'

export class Merchandise extends PureComponent {

    render() {
      console.log(styles);
      return (<div style={styles.title}>

              <Container>
                  <Row>
                      <Col>
                        <h3>Sports</h3>
                      </Col>
                  </Row>
              </Container>
              <Container>
                  <Row>
                      <Col>
                          <Link to="/playground-details">
                          <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                            <Card.Body>
                              <Card.Title> Sport Club </Card.Title>
                              <Card.Text>
                                Provide some sport club detials and reviews.
                              </Card.Text>
                              Ckeck the sports..
                            </Card.Body>
                          </Card>
                        </Link>
                      </Col>
                      <Col>
                          <Link to="/playground-details">
                          <Card>
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                            <Card.Body>
                              <Card.Title> Sport Club </Card.Title>
                              <Card.Text>
                                Provide some sport club detials and reviews.
                              </Card.Text>
                              Ckeck the sports..
                            </Card.Body>
                          </Card>
                        </Link>
                      </Col>

                  </Row>
                </Container>

              </div>)
    }


}
