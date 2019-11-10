// Imports
import React from 'react'

// App Imports
import Home from '../Containers/Home/Home'
import PlaygroundDetails from '../Containers/PlaygroundDetails/index'
import SportsDetails from '../Containers/SportsDetails/index'
import Thankyou from '../Containers/ThankyouPage/index'
import Error from '../Containers/Error/index'

// Routes
const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/playground-details',
        component: PlaygroundDetails,
        exact: true
    },
    {
        path: '/playground-details/sport',
        component: SportsDetails,
        exact: true
    },
    {
        path: '/playground-details/sport/confirm',
        component: Thankyou,
        exact: true
    },
    {
        path: '/?params:',
        component: Error,
    },
]

export default routes
