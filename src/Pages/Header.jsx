import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/Frame 4.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <Navbar bg="success" data-bs-theme="dark" className="sticky-top">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="112.15"
              height="44.38"
              alt="Hafrikplay logo"
            />
          </Navbar.Brand>
          <Nav className="ms-5">
            <Link to="/" className="text-white text-decoration-none">
              Home
            </Link>
            <Link to="/market" className="text-white text-decoration-none ms-4">
              Market
            </Link>
            <Link to="/login" className="text-white text-decoration-none ms-4">
              Log in
            </Link>
            <Link to="/signup" className="text-white text-decoration-none ms-4">
              Sign up
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="">{props.children}</div>
    </div>
  );
};
export default Header;
