import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import classes from "./NavBar.module.css";
import bitmoji from "../images/bitmoji.png";

export default function NavBar() {
  return (
    <Navbar className={classes.navbar} variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>
          <img src={bitmoji} alt="Profile Icon" width="40" height="40" /> Ernest
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
