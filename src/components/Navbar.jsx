import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="fixed-top border-custom text-light">
      <Container>
        <Navbar.Brand>
          <Link to="/">ToDojo</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
              alt="Check"
              width="50"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>
            <Link to="/dashboard">Dashboard</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/about">About</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/team">Team</Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link to="/contact">Contact</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-light">
            Signed in as:{" "}
            <Link to="/login" className="text-light">
              Ironhacker
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
