// Imports
import React,{ PureComponent } from 'react'
import { Helmet } from 'react-helmet'
import { Header } from '../Header/index'
import { Banner } from '../Banner/index'
import { Merchandise } from '../Merchandise/index'
import { Footer } from '../Footer/index'


export class HomeComponent extends PureComponent {

    render() {
      return (<div >
                <Header />
                <Banner />
                <Merchandise />
                <Merchandise />
                <Merchandise />
                <Merchandise />
                <Footer />
              </div>)
    }


}
