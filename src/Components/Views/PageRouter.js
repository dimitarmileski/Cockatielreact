import React from 'react'
//import {Switch, Route} from 'react-router-dom'
// import { BrowserRouter as Route, Switch } from "react-router-dom"
import LoginButton from '../Authentication/LoginButton'
import Home from './Home'
import Coctails from './Coctails'
import CreateCoctail from './CreateCoctail'
import Profile from './Profile'
import AboutUs from './AboutUs'
import { BrowserRouter as Router, Route, Link, Switch  } from "react-router-dom"

const PageRouter = () => {
    return (

        <div>
            <Router>
            <Link to="/">Home</Link>
            <Link to="/Coctails">Coctails</Link>
            <Link to="/CreateCoctail">CreateCoctail</Link>
            <Link to="/AboutUs">AboutUs</Link>
            <Link to="/Profile">Profile</Link>
            
                <Route exact path="/">
                    <Home />
                </Route>
               

                <Route path="/Coctails">
                    <Coctails />
                </Route>
               

                <Route path="/CreateCoctail">
                    <CreateCoctail />
                </Route>
            

                <Route path="/AboutUs">
                    <AboutUs />
                </Route>
                

                <Route path="/Profile">
                    <Profile />
                </Route>
                
            </Router>
        </div>
    )
}

export default PageRouter
