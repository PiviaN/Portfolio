import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
// import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [translate, setTranslate] = useState(false);

  return (
    <>
      <Navbar translate={translate} setTranslate={setTranslate} />
      <Header translate={translate} setTranslate={setTranslate} />
      <AboutMe translate={translate} setTranslate={setTranslate} />
      <Services translate={translate} setTranslate={setTranslate} />
      <Experience translate={translate} setTranslate={setTranslate} />
      <Portfolio translate={translate} setTranslate={setTranslate} />
      <Testimonials translate={translate} setTranslate={setTranslate} />
      <Footer translate={translate} setTranslate={setTranslate} />
    </>
  );
}

export default App;
