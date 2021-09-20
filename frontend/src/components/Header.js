import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="red">
                <Container>
                    <Navbar.Brand href="#home">
                        Myntra
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}