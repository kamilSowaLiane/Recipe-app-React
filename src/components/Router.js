import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import App from '../App'
import Ingredients from './Ingredients'

const Router = () => {
    <BrowserRouter>
        <div>
            <Route path='/' component={App} />
            <Route path='/ingredients' component={Ingredients} />
        </div>
    </BrowserRouter>
}

export default Router