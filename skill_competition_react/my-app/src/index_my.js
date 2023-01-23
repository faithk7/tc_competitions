import React, {Component} from 'react';
import * as ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Stack, Button } from 'react-bootstrap';

// test out the render functionality
class App extends Component {
    render() {
     return (
        <div>
        <h1>Welcome to my app!</h1>
        </div>
     );
    }
}

// create the navbar
class MyNavBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
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
        );
    }
}

class MyNavBarTest extends Component {
    render() {
        return (
            <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary">
                    Button as link
                </Button>
                <Button as="a" variant="success">
                    Button as link
                </Button>
            </Stack>
        );
    }
}

// // create the main panel
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyNavBarTest />);
// root.render(<App />); 
// // create the panel on the top of the main panel for sign-up/login - update in real-time

//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(<App  />);
   