// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './assests/style.css';
import Container from 'react-bootstrap/Container';
import {Navbar , Nav , Form ,Button , FormControl, Row, Col} from "react-bootstrap";

// App Imports

import routes from '../../setup/routes'
import Error from '../Error/index'
const style = {
  stickybarBottom : {
    "position" : "fixed",
    "bottom" : "0px",
    "background-color": "#23b323",
    "color": "white",
    "font-weight": "999"
  }
}

const App = (props) => (
    <div>
        <Switch>
            { routes.map((route, index) => (
                // pass in the initialData from the server for this specific route
                <Route { ...route } key={ index }/>
            )) }

            <Route component={ Error } />
        </Switch>
        <div style={ style.stickybarBottom }>
          <Container>
              <Row>
                  <Col>My Orders</Col>
                  <Col>My Profile</Col>
                  <Col>My Sports</Col>
                  <Col>My Offers</Col>
              </Row>
          </Container>
        </div>
    </div>
)

export default App
