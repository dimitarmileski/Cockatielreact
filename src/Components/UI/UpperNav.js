import React from "react";
import {
  Nav,
  Form,
  FormControl,
  Button,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import LoginButton from "../Authentication/LoginButton";
import LogoutButton from "../Authentication/LogoutButton";
import logo1 from "../../images/logo1.png";

function UpperNav() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Navbar style={{ background: "#ffeaa7" }} expand="lg">
      <Navbar.Brand>
        <img const src={logo1} height="50px" width="200px" />
      </Navbar.Brand>
      <Navbar.Brand>
        <Link style={{ color: "#000000" }} to="/">
          Дома
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Коктели" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/ListAllCocktails">Нај популарни</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Креирај коктел" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/CustomCoctails">Креирај коктел</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="За нас" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/AboutUs">Тим</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <NavDropdown title="Моја Сметка" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link style={{ color: "#000000" }} to="/UserProfile">
                Профил
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LoginButton />
            </NavDropdown.Item>
            <NavDropdown.Item>
              <LogoutButton />
            </NavDropdown.Item>
          </NavDropdown>
        </Form>
        <Link style={{ color: "#000000" }} to="/Cart">
          Кошничка
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default UpperNav;
