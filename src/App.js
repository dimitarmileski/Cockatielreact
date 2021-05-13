import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'
import UpperNav from './Components/UI/UpperNav'
import HomePage from './Components/Views/HomePage'
import Footer from './Components/UI/Footer'
import PageRouter from './Components/Views/PageRouter'

const App = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <>
 
    <Router>
    <UpperNav />
      <PageRouter/>
    </Router>
    <Footer />
    </>
  )
}

export default App

