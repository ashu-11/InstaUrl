import React  from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends React.Component {
   render() {
       return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#/">Instacar</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Link</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">More Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
       );
   }
}
export default Menu;