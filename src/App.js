import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './Components/Authentication/LoginButton'
import LogoutButton from './Components/Authentication/LogoutButton'
import UserProfile from './Components/Authentication/UserProfile'
import {useAuth0} from '@auth0/auth0-react'
import CocktailCard from './Components/Authentication/CocktailCards/CocktailCard';


const App =() => {

  const {isAuthenticated} = useAuth0()

  console.log(isAuthenticated)

  return ( 
      <>
        <LoginButton />
        <LogoutButton /> 
        <UserProfile />
        <CocktailCard Title = "Cocktail01" Content = "New cocktail"/>
        
        
      </>
  )
}

export default App;
