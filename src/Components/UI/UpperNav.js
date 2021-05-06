import React from 'react'
import {Nav,Form,FormControl,Button,Navbar,NavDropdown,}from'react-bootstrap'
function UpperNav() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Дома</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavDropdown title="Разгледај коктели" id="basic-nav-dropdown">
        <NavDropdown.Item href="action/3.1">Нај популарни</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Филтер</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Креирај Костом Коктели" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Разгледај состојки</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="За нас" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Тим</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Контакт</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
    <NavDropdown title="Моја Сметка" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <FormControl type="text" placeholder="Пребарај" className="mr-sm-2" />
      <Button>Пребарај</Button>
    </Form>
    
    
  </Navbar.Collapse>
</Navbar>
  );
}


export default UpperNav
