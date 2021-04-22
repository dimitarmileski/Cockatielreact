import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './Components/Authentication/LoginButton'
import LogoutButton from './Components/Authentication/LogoutButton'
import UserProfile from './Components/Authentication/UserProfile'
import {useAuth0} from '@auth0/auth0-react'
import {useAxiosGet} from './Components/Hooks/httprequest'


const App =() => {

  const {isAuthenticated} = useAuth0()

  console.log(isAuthenticated)

  let request = useAxiosGet("https://www.thecocktaildb.com/api/json/v1/1/random.php")

  console.log(request.data)
  

  return ( 
      <>
        <LoginButton />
        <LogoutButton /> 
        <UserProfile />
      </>
  )
}

export default App;
