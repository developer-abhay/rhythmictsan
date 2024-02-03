import { Link } from "react-router-dom";
import Logo from "/assets/images/Logo.jpg";
import "./Navbar.css";
import ListItem from "../../constants/ListItem";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  //Hamburger icon -> Show navbar
  const showNav = () => {
    const navList = document.querySelector(".nav-list");
    navList.classList.toggle("display-flex");
    console.log(navList.classList);
  };

  return (
    <header className="header-sticky header">
      <nav>
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <RxHamburgerMenu onClick={showNav} className="hamburger-icon" />
        <ul className="nav-list">
          <ListItem title="home" />
          <ListItem title="about" />
          <ListItem title="courses" />
          <ListItem title="faculty" />
          <ListItem title="contact" />
          <a href="#contact-us" className="btn btn-primary">
            Book a Demo
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
