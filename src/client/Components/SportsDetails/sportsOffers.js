// Imports
import React,{ PureComponent } from 'react'
import { Helmet } from 'react-helmet'
import { Header } from '../Header/index'
import { Banner } from '../Banner/index'
import { Merchandise } from '../Merchandise/index'
import { Footer } from '../Footer/index'
import Slider from "react-slick";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import {Navbar , Nav , Form ,Button , FormControl, Row, Col} from "react-bootstrap";


export class SportOffers extends PureComponent {

    render() {


      return (<Container>
                  <Row>
                  <div style={{ "text-align": "center" }}>

                  </div>
                  </Row>
                  <Row>
                    <Col>
                      <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                        <Card.Body>
                          <Card.Text>
                            Some descirption about sports
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
                        <Card.Body>
                          <Card.Text>
                            Some descirption about sports
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>)
    }


}
