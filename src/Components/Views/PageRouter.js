import React from 'react'
//import {Switch, Route} from 'react-router-dom'
import LoginButton from '../Authentication/LoginButton'
import HomePage from './HomePage'
import AboutUs from './AboutUs'
import ListAllCocktails from '../ViewCocktails/ListAllCocktails'
import CustomCoctails from '../CustomCocktail/CustomCocktail'
import UserProfile from '../Authentication/UserProfile'
import ShoppingCard from '../ShoppingCard/ShoppingCard'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import StripePayment from '../Payment/StripePayment'
import { useAuth0 } from '@auth0/auth0-react'
import PleasLogin from './PleasLogin'

const PageRouter = () => {
  const { isAuthenticated } = useAuth0()
  return (
    <Switch>
      <Route exact path='/'>
        <HomePage />
      </Route>

      <Route path='/ListAllCocktails'>
        <ListAllCocktails />
      </Route>

      <Route path='/CustomCoctails'>
        {isAuthenticated ? <AboutUs /> : <PleasLogin />}
      </Route>

      <Route path='/AboutUs'>
        <AboutUs />
      </Route>

      <Route path='/UserProfile'>
        {isAuthenticated ? <UserProfile /> : <PleasLogin />}
      </Route>

      <Route path='/Cart'>
        <ShoppingCard />
      </Route>
    </Switch>
  )
}

export default PageRouter
