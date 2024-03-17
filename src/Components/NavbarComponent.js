import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import NavImg from '../Components/Assets/navImage.jpg'

function NavbarComponent() {



  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><Image className='navImg' src={NavImg} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
          </Nav>

          <Nav>
          <NavDropdown title="The Five Jobs" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to='/pageTwo'>Google</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to='/pageThree'>NASA</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/pageFour'>NASA again</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/pageFive'>Netflix</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/pageSix'>Microsoft</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;