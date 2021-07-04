import React from "react";
import { Navbar, Form, Nav, NavLink } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <Navbar style={{ background: "#e67e22" }}>
      <Navbar.Brand href="#home">Cockatiel</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Form>
        <Nav defaultActiveKey="/home" className="flex-column">
          <form inline>
            <Nav class="text-white">Социални мрежи:</Nav>
            <SocialIcon url="https://twitter.com/" className="mr-3 mb-1" />
            <SocialIcon url="https://facebook.com/" />
          </form>
        </Nav>
      </Form>
    </Navbar>
  );
};

export default Footer;
