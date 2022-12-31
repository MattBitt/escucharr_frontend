import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import './navigationbar.scss'

function NavigationBar() {
  return (
    <Navbar className="bg-dark" expand="lg">
      <Container>
        <Navbar.Brand className="text-primary fw-bolder">
          <Link to="/">escucharr</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link text-light fw-bold" to="/sources">
              View Sources
            </Link>
            <Link className="nav-link text-light fw-bold" to="/tracks">
              View Tracks
            </Link>
            <Link className="nav-link text-light fw-bold" to="/whatsplaying">
              Whats Playing
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
