import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './navigationbar.scss'

function NavigationBar() {
  //   return (
  //     <nav
  //       style={{
  //         borderBottom: 'solid 1px',
  //         paddingBottom: '1rem',
  //       }}
  //     >
  //       <p>
  //         <Link to="/">Home</Link>
  //       </p>

  //       <p>
  //         <Link to="/whats-playing">Whats Playing</Link>
  //       </p>
  //       <p>
  //         <Link to="/sources">Source Selector</Link>
  //       </p>
  //       <p>
  //         <Link to="/tracks">Track Selector</Link>
  //       </p>
  //       <p>
  //         <Link to="/asdf">404 Test</Link>
  //       </p>
  //     </nav>
  //   )
  // }

  return (
    <Navbar className="bg-primary" expand="lg">
      <Container>
        <Navbar.Brand href="/">escucharr</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/sources">
              View Sources
            </Link>
            <Link className="nav-link" to="/tracks">
              View Tracks
            </Link>
            <Link className="nav-link" to="/whatsplaying">
              Whats Playing
            </Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
