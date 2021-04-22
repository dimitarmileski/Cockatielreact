import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './Components/Authentication/LoginButton'
import LogoutButton from './Components/Authentication/LogoutButton'
import UserProfile from './Components/Authentication/UserProfile'
import {useAuth0} from '@auth0/auth0-react'
import PageRouter from './Components/Views/PageRouter'
import { BrowserRouter as Router } from "react-router-dom"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const App =() => {

  const {isAuthenticated} = useAuth0()

  console.log(isAuthenticated)

  return ( 
      <>
        <LoginButton />
        <LogoutButton /> 
        <UserProfile />

        <Router>
          <PageRouter />
          <Link to="/Users">Users</Link>
        </Router>


     
      </>
  )
}

export default App;
