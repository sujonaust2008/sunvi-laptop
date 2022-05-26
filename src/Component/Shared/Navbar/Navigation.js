import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from './CustomLink';

const Navigation = () => {
    const [user]= useAuthState(auth);
    const handleSignOut = ()=>{
        signOut(auth);
    }
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Sunvi Laptop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto d-flex align-items-center">
                            <div className='d-flex'>
                                <Nav.Link href="#features"><CustomLink to="/">Home</CustomLink></Nav.Link>
                                <Nav.Link href="#pricing"><CustomLink to="/blogs">Blogs</CustomLink></Nav.Link>
                                <Nav.Link href="#pricing"><CustomLink to="/manageInventory">ManageItems</CustomLink></Nav.Link>
                                <Nav.Link href="#pricing"><CustomLink to="/addItems">AddItems</CustomLink></Nav.Link>
                            </div>
                            <div>
                                <Nav.Link href="#pricing">{user?
                                <button onClick={handleSignOut} className="btn btn-link text-decoration-none text-white">SignOut</button>:
                                <CustomLink to="/login">LogIn</CustomLink>}</Nav.Link>
                            </div>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Navigation;