
import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Gallery from "./components/gallery/Gallery";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Portfolio">
        <Gallery />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
