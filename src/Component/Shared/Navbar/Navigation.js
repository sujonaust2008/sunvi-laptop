import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from './CustomLink';

const Navigation = () => {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Sunvi Laptop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features"><CustomLink to="/">Home</CustomLink></Nav.Link>
                            <Nav.Link href="#pricing"><CustomLink to="/blogs">Blogs</CustomLink></Nav.Link>
                            <Nav.Link href="#pricing"><CustomLink to="/manageItems">ManageItems</CustomLink></Nav.Link>
                            <Nav.Link href="#pricing"><CustomLink to="/addItems">AddItems</CustomLink></Nav.Link>
                            <Nav.Link href="#pricing"><CustomLink to="/myItems">MyItems</CustomLink></Nav.Link>
                            <Nav.Link href="#pricing"><CustomLink to="/login">LogIn</CustomLink></Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Navigation;