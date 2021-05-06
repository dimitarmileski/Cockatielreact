import 'bootstrap/dist/css/bootstrap.min.css'
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter as Router } from 'react-router-dom'
import UpperNav from './Components/UI/UpperNav'
import HomePage from './Components/Views/HomePage'
import Footer from './Components/UI/Footer'

const App = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <>
      <UpperNav />

      <HomePage />

      <Footer />
    </>
  )
}

export default App

