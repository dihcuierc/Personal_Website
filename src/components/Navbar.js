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
            <Nav.Link href="#home" style={{color:"white", fontSize:"20px", padding:"10px"}}>Home</Nav.Link>
            <Nav.Link href="#about" style={{color:"white", fontSize:"20px", padding:"10px"}}>About</Nav.Link>
            <Nav.Link href="#projects" style={{color:"white", fontSize:"20px", padding:"10px"}}>Projects</Nav.Link>
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