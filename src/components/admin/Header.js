import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";


import { useNavigate } from "react-router-dom";
import { accountService } from "../../_services/account.service";

const Header = () => {
  let navigate = useNavigate();

  // Gestion du bouton de déconnexion
  const logout = () => {
    accountService.logout();
    navigate("/");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/home">Accueil</Nav.Link>
              <Nav.Link href="/monuments">Monuments</Nav.Link>
              <Nav.Link href="/musees">Musées</Nav.Link>
              <Nav.Link href="/boutiques">Boutiques</Nav.Link>
              <Nav.Link href="/sortir">Sortir</Nav.Link>
              <div>|</div>
              <Nav.Link href="/visiter">Visiter</Nav.Link>
              <Nav.Link href="/art">Art</Nav.Link>
              <div>|</div>
              <Nav.Link href="/#">Carte</Nav.Link>
              <div>
                <Button variant="dark" onClick={logout}>
                  Deconnection
                </Button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
