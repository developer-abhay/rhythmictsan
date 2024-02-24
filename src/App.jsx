import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import BookDemo from "./components/BookDemo/BookDemo";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Courses from "./pages/Courses/Courses";
import Faculty from "./pages/Faculty/Faculty";
import Contact from "./pages/Contact/Contact";
import { facultyObject } from "./data/faculty";
import FacultyProfile from "./components/FacultyProfile/FacultyProfile";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => (
  <Router>
    <main className="flex flex-col justify-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/contact" element={<Contact />} />
        {facultyObject.map(({ id, name, title, img, desc }) => {
          return (
            <Route
              path={`/facultyProfile/${name}`}
              key={id}
              element={
                <FacultyProfile
                  name={name}
                  title={title}
                  img={img}
                  desc={desc}
                />
              }
            />
          );
        })}
      </Routes>
      <BookDemo />
      <Footer />
    </main>
  </Router>
);

export default App;
