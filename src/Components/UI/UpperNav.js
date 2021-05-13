import React from 'react'
import {Nav,Form,FormControl,Button,Navbar,NavDropdown,}from'react-bootstrap'
import { BrowserRouter as Router, Route, Link, Switch  } from "react-router-dom"
import LoginButton from '../Authentication/LoginButton'
import LogoutButton from '../Authentication/LogoutButton'

function UpperNav() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (

<Navbar bg="light" expand="lg">
  <Navbar.Brand><Link to="/">Дома</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavDropdown title="Коктели" id="basic-nav-dropdown">
        <NavDropdown.Item><Link to="/ListAllCocktails">Нај популарни</Link></NavDropdown.Item>
        <NavDropdown.Item>Филтер</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Креирај коктел" id="basic-nav-dropdown">
        <NavDropdown.Item><Link to="/CustomCoctails">Разгледај состојки</Link></NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="За нас" id="basic-nav-dropdown">
        <NavDropdown.Item><Link to="/AboutUs">Тим</Link></NavDropdown.Item>
        <NavDropdown.Item>Контакт</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
    <NavDropdown title="Моја Сметка" id="basic-nav-dropdown">
        <NavDropdown.Item><Link to="/UserProfile">Профил</Link></NavDropdown.Item>
        <NavDropdown.Item><LoginButton /></NavDropdown.Item>
        <NavDropdown.Item><LogoutButton /></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>Separated link</NavDropdown.Item>
      </NavDropdown>
      <FormControl type="text" placeholder="Пребарај" className="mr-sm-2" />
      <Button>Пребарај</Button>
    </Form>
    
    
  </Navbar.Collapse>
</Navbar>
  );
}


export default UpperNav
