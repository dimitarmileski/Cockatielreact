import React from 'react'
import {Navbar,Form,Nav, NavLink,}from'react-bootstrap'

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" >
          <Navbar.Brand href="#home">Cockatiel</Navbar.Brand>
          <Nav className="mr-auto">
          </Nav>
            <Form>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav class="text-white">Социални мрежи:</Nav>
            <Nav.Link className="text-primary"href="/home">Twitter</Nav.Link>
            <Nav.Link className="text-primary"href="/home">FaceBook</Nav.Link>

          </Nav>
          </Form>
          <Form>
          <div className="ml-5 mb-1 text-white" >Контакт Број:</div>
          <div className="ml-5 mt-8 text-white">074 548 684</div>
          </Form>
        </Navbar>

    )
}

export default Footer

