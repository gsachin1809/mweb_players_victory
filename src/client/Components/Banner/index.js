// Imports
import React ,{ PureComponent } from 'react'
import { connect } from 'react-redux'

import { styles } from './style.js'
import Carousel from 'react-bootstrap/Carousel'

export class Banner extends PureComponent {

    // const [index, setIndex] = useState(0);
    // const [direction, setDirection] = useState(null);
    //
    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    //   setDirection(e.direction);
    // };


    render(){
      // const [index, setIndex] = useState(0);
      // const [direction, setDirection] = useState(null);
      //
      // const handleSelect = (selectedIndex, e) => {
      //   setIndex(selectedIndex);
      //   setDirection(e.direction);
      // };

      return (
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=723&q=80"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=723&q=80"
                      alt="Second slide"
                    />

                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=723&q=80"
                      alt="Third slide"
                    />

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              );
    };

}
