// Imports
import 'date-fns';
import React,{ PureComponent } from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Header } from '../Header/index'
import { Banner } from '../Banner/index'
import { Merchandise } from '../Merchandise/index'
import { Footer } from '../Footer/index'
import Slider from "react-slick";
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import {Navbar , Nav , Form ,Button , FormControl, Row, Col} from "react-bootstrap";

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DatePicker from "material-ui/DatePicker"

export class SportsDetailsComponent extends PureComponent {

    constructor(props){
      super(props);
      this.state = {
        selectedDate : new Date('2014-08-18T21:11:54')
      }
      this.handleDateChange = this.handleDateChange.bind(this);
    }

    componentDidMount(){

    }

    handleDateChange(date){
      this.setState({
          selectedDate : date
      });
    };

    render() {

      return (<div >
                <Header />
                <div>
                <Container>
                       <div style={{ "text-align": "center" }}>
                          PlayGround Name <br />
                          PlayGround Full Address<br />
                          Rating and reviews. <br />
                          Sport details . <br />
                          * * * * *<br />
                       </div>

                 </Container>
                </div>
                <div>
                  <Container>

                    <Row>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                          <Grid container justify="space-around">

                            <KeyboardDatePicker
                              margin="normal"
                              id="date-picker-dialog"
                              label="Date picker dialog"
                              format="MM/dd/yyyy"
                              value={this.state.selectedDate}
                              onChange={this.handleDateChange}
                              KeyboardButtonProps={{
                                'aria-label': 'change date',
                              }}
                            />

                            <KeyboardTimePicker
                              margin="normal"
                              id="time-picker"
                              label="Time picker"
                              value={this.state.selectedDate}
                              onChange={this.handleDateChange}
                              KeyboardButtonProps={{
                                'aria-label': 'change time',
                              }}
                            />
                          </Grid>
                        </MuiPickersUtilsProvider>
                    </Row>
                  </Container>
                </div>
                <div className="" style={{ "text-align" : "center"}}>
                  <Link to="/playground-details/sport/confirm">
                      <Button variant="success">Book My Slot</Button>
                  </Link>
                </div>
                <Container>
                    <Row>
                      <Col>
                          <b>What is Lorem Ipsum?</b>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                          </p>
                      </Col>
                    </Row>
                </Container>
                <Footer />
              </div>)
    }


}
