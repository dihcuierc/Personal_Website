import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./NavBar.module.css";
import bitmoji from "../images/bitmoji.png";

export default function NavBar() {
  return (
    <Navbar className={classes.navbar} variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className={classes.header}>
          <img src={bitmoji} alt="Profile Icon" width="40" height="40" /> Ernest
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#home" className={classes.content}>
            Home
          </Nav.Link>
          <Nav.Link href="#about" className={classes.content}>
            About
          </Nav.Link>
          <Nav.Link href="#projects" className={classes.content}>
            Projects
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
