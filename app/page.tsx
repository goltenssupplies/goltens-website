import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Products />
      <Industries />
      <Contact />
      <Footer />
    </>
  );
}