import { Link } from "react-router-dom";
import Logo from "/assets/images/Logo.jpg";
import "./Navbar.css";
import ListItem from "../../constants/ListItem";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  return (
    <header class="header-sticky">
      <nav>
        <Link className="logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <RxHamburgerMenu className="hamburger-icon" />
        <ul className="nav-list">
          <ListItem title="home" />
          <ListItem title="about us" />
          <ListItem title="courses" />
          <ListItem title="faculty" />
          <ListItem title="contact" />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

{
  /* 
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <!-- ***** Logo Start ***** -->
                        <a href="#" class="logo">
                            <img src="assets/images/logo.png" alt="Softy Pinko"/>
                        </a>
                        <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->
                        <ul class="nav">
                            <li><a href="#welcome" class="active">Home</a></li>
                            <li><a href="#features">About</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#work-process">Events</a></li>
                            <li><a href="#pricing-plans">Faculty</a></li>
                            <li><a href="#blog">Blog Entries</a></li>
                            <li><a href="#contact-us">Contact Us</a></li>
                        </ul>
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        <!-- ***** Menu End ***** -->
                    </nav>
                </div>
            </div>
        </div>
    </header>
    <!-- ***** Header Area End ***** --> */
}
