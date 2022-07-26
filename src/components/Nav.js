import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function Navbar2() {
    return (
        <Navbar className='nav' expand="lg">
            <Container>
                <Navbar.Brand className='TextWhite'>WL</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Nav.Link className='TextWhite' href="/WL-portfolio">
                            <AiOutlineHome style={{ marginBottom: "2px" }} />
                            Home</Nav.Link>

                        <Nav.Link className='TextWhite' href="/about">
                            <AiOutlineUser style={{ marginBottom: "2px" }} />
                            About me</Nav.Link>

                        <Nav.Link className='TextWhite' href='/porfolio'>
                            <AiOutlineFundProjectionScreen
                                style={{ marginBottom: "2px" }} />Porfolio</Nav.Link>

                        <Nav.Link className='TextWhite' href='/resume'>
                            <CgFileDocument style={{ marginBottom: "2px" }} />Resume</Nav.Link>

                        <Nav.Link className='TextWhite' href='/contact'>
                            <AiFillStar style={{ fontSize: "1.1em" }} />Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>

    )
};

export default Navbar2;