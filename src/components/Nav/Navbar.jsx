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
  };

  //Book demo btn

  return (
    <header className="header-sticky header">
      <nav>
        <a className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </a>

        <ul className="nav-list" onClick={showNav}>
          <ListItem title="home" url="/" />
          <ListItem title="about" url="/about" />
          <ListItem title="courses" url="/courses" />
          <ListItem title="faculty" url="/faculty" />
          <ListItem title="services" url="/services" />
          <ListItem title="blogs" url="/blogs" />
          <ListItem title="contact" url="/contact" />
          <div>
            <a href="#book-demo-form" className="btn btn-primary">
              Book a Demo
            </a>
          </div>
        </ul>

        <RxHamburgerMenu onClick={showNav} className="hamburger-icon" />
      </nav>
    </header>
  );
};

export default Navbar;
