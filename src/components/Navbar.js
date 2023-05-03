import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';

export default function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top" >
        <Container>
          <Navbar.Brand href="/">Ernest</Navbar.Brand>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}