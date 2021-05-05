import 'bootstrap/dist/css/bootstrap.min.css'
import LoginButton from './Components/Authentication/LoginButton'
import LogoutButton from './Components/Authentication/LogoutButton'
import UserProfile from './Components/Authentication/UserProfile'
import {useAuth0} from '@auth0/auth0-react'
import { BrowserRouter as Router, Route, Link  } from "react-router-dom"
//import PageRouter from './Components/Views/PageRouter'
import PageRouter from './Components/Views/PageRouter'


const App =() => {

  const {isAuthenticated} = useAuth0()

  console.log(isAuthenticated)

  return ( 
    <>
    <LoginButton />
    <LogoutButton /> 
    <UserProfile />

    <PageRouter/>

  </>
  )
}

export default App;