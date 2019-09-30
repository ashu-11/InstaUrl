import React  from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logonav.png';

class Menu extends React.Component {
   render() {
       return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#/"><img   style={{width:100, marginTop: -7}}   src={logo }/></Navbar.Brand>
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
