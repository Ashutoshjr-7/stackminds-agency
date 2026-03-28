import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import About from "../sections/About";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer/>
      </>
      
  );
}