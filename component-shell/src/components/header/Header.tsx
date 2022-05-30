import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Header() {
  const navigate = useNavigate();
  const [logInCheck, setLogInCheck] = useState(false);
  useEffect(() => {
    // console.log("test");
    if (sessionStorage.getItem("_token")) {
      setLogInCheck(true);
    } else {
      setLogInCheck(false);
    }
  }, []);

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Neosoft tech"
              src="https://www.neosofttech.com/sites/all/themes/neosoft2017/images/neosoft.svg"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            {logInCheck && (
              <>
                <Link to="/users" className="nav-link">
                  Users
                </Link>
              </>
            )}
            <Nav.Link>About</Nav.Link>
          </Nav>
        </Container>
        {logInCheck ? (
          <Button
            size="sm"
            variant="dark"
            className="me-3"
            onClick={() => {
              navigate("/login");
              sessionStorage.removeItem("_token");
            }}
          >
            Log Out
          </Button>
        ) : (
          <>
            <Button
              size="sm"
              variant="dark"
              data-testid="login-Btn"
              className="me-3"
              onClick={() => {
                navigate("/login");
              }}
            >
              Log In
            </Button>
            <Button
              size="sm"
              variant="dark"
              data-testid="Register-Btn"
              className="me-3"
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </Button>
          </>
        )}
      </Navbar>
    </>
  );
}
