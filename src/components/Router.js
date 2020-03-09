import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import App from '../App'
import Ingredients from './Ingredients'

const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' component={App} exact />
                <Route path='/ingredients' component={Ingredients} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router