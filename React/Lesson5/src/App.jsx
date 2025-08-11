import { Link, NavLink, Route, Routes } from "react-router"
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

const setActiveLink = ({isActive}) => isActive ? "navbar__item navbar__item-active" : "navbar__item";

const App = () => {
  return (
    <>
        <nav className="navbar">
          <ul className="navbar-list">
            <li><NavLink to="/" className={setActiveLink}>Home</NavLink></li>
            <li><NavLink to="/blog" className={setActiveLink}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={setActiveLink}>Contact</NavLink></li>
            <li><NavLink to="/about" className={setActiveLink}>About</NavLink></li>
          </ul>
        </nav>

        <main>
           <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/blog" element={<Blog />}/>
              <Route path="/blog/:id" element={<BlogDetails />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/about" element={<About />}/>
           </Routes>
        </main>
    </>
  )
}

export default App
