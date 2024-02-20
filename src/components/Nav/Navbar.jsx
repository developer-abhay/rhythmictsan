import { Link } from "react-router-dom";
import Logo from "/assets/images/Logo.jpg";
import "./Navbar.css";
import ListItem from "../../constants/ListItem";
import { RxHamburgerMenu } from "react-icons/rx";
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
        <a className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </a>

        <RxHamburgerMenu onClick={showNav} className="hamburger-icon" />
        <ul className="nav-list">
          <ListItem title="home" url="/" />
          <ListItem title="about" url="/about" />
          <ListItem title="courses" url="/courses" />
          <ListItem title="faculty" url="/faculty" />
          <ListItem title="contact" url="/contact" />
          <a href="#book-demo-form" className="btn btn-primary">
            Book a Demo
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
