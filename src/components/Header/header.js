import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../assets/style/scss/header.scss';
import Images from '../../assets/Images/Framelogo.svg';

function Header() {
  return (
    <Navbar expand="lg" className="" id="nav-bar">
        <Navbar.Brand href="#home">
          <img 
          src={Images} 
          alt="Brand Logo"
          className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-us">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#offers">Offers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;