import React from 'react'
import {
  Nav,
  Form,
  FormControl,
  Button,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import LoginButton from '../Authentication/LoginButton'
import LogoutButton from '../Authentication/LogoutButton'

function UpperNav() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`)

  return (
    <Navbar bg='dark' expand='lg'>
      <Navbar.Brand>
        <Link to='/'>Дома</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavDropdown title='Коктели' id='basic-nav-dropdown'>
            <NavDropdown.Item>
              <Link to='/ListAllCocktails'>Нај популарни</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='Креирај коктел' id='basic-nav-dropdown'>
            <NavDropdown.Item>
              <Link to='/CustomCoctails'>Креирај коктел</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title='За нас' id='basic-nav-dropdown'>
            <NavDropdown.Item>
              <Link to='/AboutUs'>Тим</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <NavDropdown title='Моја Сметка' id='basic-nav-dropdown'>
            <NavDropdown.Item>
              <Link to='/UserProfile'>Профил</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LoginButton />
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LogoutButton />
            </NavDropdown.Item>
          </NavDropdown>
        </Form>
        <Link to='/Cart'>Кошничка</Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default UpperNav
