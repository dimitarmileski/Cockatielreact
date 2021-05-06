import React from 'react'
//import {Switch, Route} from 'react-router-dom'
import { BrowserRouter as Route, Switch } from "react-router-dom"
import LoginButton from '../Authentication/LoginButton'
const PageRouter = () => {
    return (

        <div>
            <Switch>
                <Route exact path="/">
                <LoginButton/>
                </Route>
                <Route  path="/Users">
                <LoginButton/>
                </Route>
            </Switch>
        </div>
    )
}

export default PageRouter