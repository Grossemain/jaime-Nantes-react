import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logo from "../../components/public/Logo";



const Header = () => {
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
                            <Logo/>
                            <Nav.Link href="/home">Accueil</Nav.Link>
                            <Nav.Link href="/#">Monuments</Nav.Link>
                            <Nav.Link href="/#">Musées</Nav.Link>
                            <Nav.Link href="/#">Boutiques</Nav.Link>
                            <Nav.Link href="/#">Sortir</Nav.Link>
                            <div>|</div>
                            <Nav.Link href="/#">Visiter</Nav.Link>
                            <Nav.Link href="/#">Art</Nav.Link>
                            <Nav.Link href="/#">Blog</Nav.Link>
                            <div>|</div>
                            <Nav.Link href="/#">Carte</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>         
        </div>
    );
};

export default Header;