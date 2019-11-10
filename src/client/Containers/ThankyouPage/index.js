// Imports
import React ,{ PureComponent } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { ThankyouComponent } from '../../Components/Thankyou/index'

class Thankyou extends PureComponent {

    render() {
      return (<div>
                  <Helmet>
                      <title>Home</title>
                  </Helmet>
                  <ThankyouComponent />
              </div>)
    }


}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Thankyou);
