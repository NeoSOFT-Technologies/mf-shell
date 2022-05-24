import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
export default function Footer() {
  return (
    <>
      <Navbar bg="light" variant="light" sticky="bottom">
        <Container>
          <Navbar.Brand>NeoSoft</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="https://www.neosofttech.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Copyright ©{"  "}
              Neosoft Technologies{"  "}
              2022
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
