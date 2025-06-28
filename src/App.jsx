import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Education from "./Sections/Education";
import Experience from "./Sections/Experience";
import Home from "./Sections/Home";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Loading from "./Sections/Loading";

function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading></Loading>;
  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-344px)]">
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Education></Education>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
