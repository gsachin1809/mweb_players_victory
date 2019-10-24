// Imports
import React,{ PureComponent } from 'react'
import { Helmet } from 'react-helmet'
import { Header } from '../Header/index'
import { Banner } from '../Banner/index'
import { Merchandise } from '../Merchandise/index'
import { Footer } from '../Footer/index'
import { SportOffers } from './sportsOffers'
import Slider from "react-slick";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import {Navbar , Nav , Form ,Button , FormControl, Row, Col} from "react-bootstrap";


export class PlaygroundDetailsComponent extends PureComponent {

    render() {


      return (<div >
                <Header />
                <div>
                <Container>
                       <div style={{ "text-align": "center" }}>
                          PlayGround Name <br />
                          PlayGround Full Address<br />
                          Rating and reviews. <br />
                          * * * * *<br />
                       </div>

                 </Container>
                </div>
                <div>
                  <Container>


                    <Row>
                    <div style={{ "text-align": "center" }}>

                      <h3> Sports Offers:  </h3>
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
                  </Container>
                  <SportOffers />
                  <SportOffers />
                  <SportOffers />
                  <SportOffers />
                  <SportOffers />
                </div>
                <Footer />
              </div>)
    }


}
