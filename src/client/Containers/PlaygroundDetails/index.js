// Imports
import React ,{ PureComponent } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { PlaygroundDetailsComponent } from '../../Components/PlaygroundDetails/index'

class PlaygroundDetails extends PureComponent {

    render() {
      return (<div>
                  <Helmet>
                      <title>Home</title>
                  </Helmet>
                  <PlaygroundDetailsComponent />
              </div>)
    }


}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PlaygroundDetails);
