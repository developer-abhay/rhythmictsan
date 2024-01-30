import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.jpg";
import "./Navbar.css";
import ListItem from "../../constants/ListItem";
const Navbar = () => {
  return (
    <header>
      <nav>
        <Link className="nav-logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <ul className="nav-items">
          <ListItem title="home" />
          <ListItem title="about" />
          <ListItem title="courses" />
          <ListItem title="faculty" />
          <ListItem title="contact" />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
