import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./NavBar.module.css";
import { useState } from "react";

export default function NavBar() {
  const [active, setActive] = useState("home");
  const handleLinkClick = (section) => {
    setActive(section);
  };

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand
          href="#home"
          className={classes.header}
          onClick={() => handleLinkClick("home")}
        >
          Ernest
        </Navbar.Brand>
        <Nav>
          <Nav.Link
            href="#home"
            className={`${classes.content} ${
              active === "home" ? classes.active : ""
            }`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#about"
            className={`${classes.content} ${
              active === "about" ? classes.active : ""
            }`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#projects"
            className={`${classes.content} ${
              active === "projects" ? classes.active : ""
            }`}
            onClick={() => handleLinkClick("projects")}
          >
            Projects
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
