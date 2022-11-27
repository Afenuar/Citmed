import React from "react";
import {
    Container,
    Navbar,
    Nav,
    Dropdown,
    DropdownButton,
    Row,
} from "react-bootstrap";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

export default class menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    Logout() {
        cookies.remove("_s");
        window.location.reload();
    }
    render() {
        return (
            <Navbar
                className="color-nav"
                fixed="top"
                id="navbar"
                /* bg="primary"
                expand="lg" */
                variant="dark"
            >
                <Container>
                    <Dropdown.Header>
                      <FontAwesomeIcon icon={faHeart} />
                    </Dropdown.Header>
                    <Navbar.Brand href="#home"> CITMED </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav id="navbar" className="me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link> */}
                        </Nav>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title="Usuario"
                        >
                            <Dropdown.Header id="dropdown-header">
                                <Row>
                                    <FontAwesomeIcon icon={faUserCircle} />
                                </Row>
                                <Row>Mi usuario</Row>
                            </Dropdown.Header>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => this.Logout()}>
                                Cerrar Sesion
                            </Dropdown.Item>
                            {/* <Dropdown.Item href="#/action-2">
                                Another action
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                                Something else
                            </Dropdown.Item> */}
                        </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
