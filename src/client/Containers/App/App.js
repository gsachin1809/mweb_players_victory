// Imports
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './assests/style.css';

// App Imports

import routes from '../../setup/routes'
import Error from '../Error/index'

const App = (props) => (
    <div>
        <Switch>
            { routes.map((route, index) => (
                // pass in the initialData from the server for this specific route
                <Route { ...route } key={ index }/>
            )) }

            <Route component={ Error } />
        </Switch>

    </div>
)

export default App
