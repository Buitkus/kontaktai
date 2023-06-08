import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = () => {
    return (
        <div>
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Contact</Navbar.Brand>
        </Container>
      </Navbar>
        </div>

    )

}

export default MyNavbar