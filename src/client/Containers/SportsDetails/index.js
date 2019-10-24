// Imports
import React ,{ PureComponent } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { SportsDetailsComponent } from '../../Components/SportsDetails/index'

class SportsDetails extends PureComponent {

    render() {
      return (<div>
                  <Helmet>
                      <title>Home</title>
                  </Helmet>
                  <SportsDetailsComponent />
              </div>)
    }


}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SportsDetails);
