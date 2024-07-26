import React from "react";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <Container fluid="md-3 bg-dark text-light">
      <Row>
        <Col>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link href="/admin/dashboard">DASHBOARD</Nav.Link>
            <Nav.Link href="#">Voir le site</Nav.Link>
            <span>LIEUX</span>
            <Nav.Link href="#">Tous les lieux</Nav.Link>
            <Nav.Link href="#">Ajouter un lieu</Nav.Link>
            <span>ARTICLES</span>
            <Nav.Link href="#">Tous les articles</Nav.Link>
            <Nav.Link href="#">Ajouter un article</Nav.Link>

            <span>CATEGORIES</span>
            <Nav.Link href="#">Types de categories</Nav.Link>
            <Nav.Link href="#">Toutes les categories</Nav.Link>
            <Nav.Link href="#">Ajouter un type de categorie</Nav.Link>

            <span>COMPTE</span>
            <Nav.Link href="#">Modifier son compte</Nav.Link>
            <Nav.Link href="#">Deconnection</Nav.Link>


          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default SideMenu;
