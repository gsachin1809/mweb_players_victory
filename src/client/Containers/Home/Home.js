// Imports
import React ,{ PureComponent } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { HomeComponent } from '../../Components/Home/index'

class Home extends PureComponent {

    render() {
      return (<div>
                  <Helmet>
                      <title>Home</title>
                  </Helmet>
                  <HomeComponent />
              </div>)
    }


}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
