import type { FC } from "react";
import styles from "./Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import NavBar from "react-bootstrap/Navbar";
import { Link } from "react-router";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => (
  <div className={styles.Navbar} data-testid="Navbar">
    <NavBar bg="primary" data-bs-theme="dark">
      <Container>
        <NavBar.Brand href="#home">Navbar</NavBar.Brand>
        <Nav className="me-auto">
          <Link to={"/"} className="nav-link">
            Home
          </Link>
          <Link to={"/Editor"} className="nav-link">
            New
          </Link>
          <Link to={"/Editor/2"} className="nav-link">
            Edit id:2
          </Link>
          <Link to={"/Thumbnail"} className="nav-link">
            Thumbnail
          </Link>
        </Nav>
      </Container>
    </NavBar>
  </div>
);

export default Navbar;
