import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row className="footer-copywright">

                <h6>Designed and Developed by Wingky</h6>
            </Row>

            <Row className="footer-copywright">
                <h6>Copyright © {year} WL</h6>
            </Row>
            <Row  >
                {/* <Nav  >
                    <Nav.Link className="footer-body" href='https://github.com/wingky1208' target="_blank"><AiFillGithub /></Nav.Link>
                    <Nav.Link className="footer-body" href="https://www.linkedin.com/in/wingky-liang-6664a6231/" target="_blank"><FaLinkedin /></Nav.Link>
                </Nav> */}
                <ul className="footer-body footer-icons">
                    <li className="social-icons">
                        <a
                            href="https://github.com/wingky1208"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <AiFillGithub />
                        </a>
                    </li>

                    <li className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/wingky-liang-6664a6231/"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin />
                        </a>
                    </li>

                </ul>

            </Row>
        </Container>
    );
}

export default Footer;
