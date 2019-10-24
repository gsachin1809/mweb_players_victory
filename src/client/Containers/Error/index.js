// Imports
import React ,{ PureComponent } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { HomeComponent } from '../../Components/Home/index'
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image'
import {Navbar , Nav , Form ,Button , FormControl, Row, Col } from "react-bootstrap";

class Error extends PureComponent {

    render() {
      return (<div>
                  <Helmet>
                      <title>Error</title>
                  </Helmet>
                    <Row>

                        <Image src="https://image.shutterstock.com/z/stock-vector-page-broken-bicycle-functional-vector-illustration-for-page-1466749490.jpg" thumbnail style={{ "width":"100%"}} />

                    </Row>

              </div>)
    }


}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Error);
