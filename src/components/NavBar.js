import React from "react";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy5LYTTgMsbyYqwVEex1TzkkPwmqDUsMPVaA&usqp=CAU"
            width="41"
            height="42"
            className="d-inline-block align-top"
            alt="cookit"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
