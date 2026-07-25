import Products from "./components/Products";
import Navbar from "./components/Navbar";
import HeroV2 from "./components/HeroV2";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <HeroV2 />
      <About />
      <Services />
      <Products />
      <Industries />
      <Brands />
      <Contact />
      <Footer />
    </>
  );
}