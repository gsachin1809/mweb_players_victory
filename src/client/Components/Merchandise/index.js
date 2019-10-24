// Imports
import React ,{ PureComponent } from 'react'
import { connect } from 'react-redux'

import { styles } from './style.js'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import {Navbar , Nav , Form ,Button , FormControl, Row, Col} from "react-bootstrap";


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
                      <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                        <Card>
                          <Card.Img variant="top" src="https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title and make up the bulk of
                              the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                          </Card.Body>
                        </Card>
                    </Col>
                  </Row>
                </Container>

              </div>)
    }


}
