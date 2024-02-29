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
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import Terms from "./pages/TermsAndConditions/Terms";
import Support from "./pages/Support/Support";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="white"
            strokeColor="white"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <Router>
          <main className="flex flex-col justify-center">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/support" element={<Support />} />
              {facultyObject.map(
                ({ id, name, title, img, img2, desc, bioImages, socials }) => {
                  return (
                    <Route
                      path={`/facultyProfile/${name}`}
                      key={id}
                      element={
                        <FacultyProfile
                          name={name}
                          title={title}
                          img={img}
                          img2={img2}
                          desc={desc}
                          bioImages={bioImages}
                          socials={socials}
                        />
                      }
                    />
                  );
                }
              )}
            </Routes>
            <BookDemo />
            <Footer />
          </main>
        </Router>
      )}
    </>
  );
};

export default App;
