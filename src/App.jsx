import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import BookDemo from "./components/BookDemo/BookDemo";
const App = () => (
  <main className="flex flex-col justify-center">
    <Navbar />
    <Home />
    <BookDemo />
    <Footer />
  </main>
);

export default App;
