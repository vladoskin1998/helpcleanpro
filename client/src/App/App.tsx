import React, { Suspense, useEffect, useState } from "react"
import i18n from "../i18n";
import { Element } from "react-scroll"
import { Loader } from "./ui/Loader"
import { ButtonTop } from "./ui/ButtonTop"
import Main from "./Main"
import About from "./About";
import Service from "./Service";
import PriceBeginning from "./PriceBeginning";
import Price from "./Price";
import Contats from "./Contats";
import Header from "./Header";

const LanguageModal = ({ onSelect }: { onSelect: (lang: string) => void }) => (
  <div className="language-modal-overlay">
    <div className="language-modal-content">
      <h2 style={{color:'grey' }}>  Изберете език | Choose language | Выберите язык</h2>
      <br />
      <div>
        <button onClick={() => onSelect("bg")} style={{ margin: 8, color:'grey' }}>Български</button>
      </div>
      <div>
        <button onClick={() => onSelect("en")} style={{ margin: 8, color:'grey' }}>English</button>
      </div>

      <div>
        <button onClick={() => onSelect("ru")} style={{ margin: 8, color:'grey' }}>Русский</button>
      </div>
    </div>
  </div>
);

function App() {

  const [showLangModal, setShowLangModal] = useState(() => !localStorage.getItem('language'));


  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang);
    }
  }, []);

  const [showButtonTop, setShowButtonTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButtonTop(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleLangSelect = (lang: string) => {
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
    setShowLangModal(false);
  };

  return (
    <div className="App">
      {showLangModal && <LanguageModal onSelect={handleLangSelect} />}
      <Header />
      <Element name="main">
        <Main />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="service">
        <Service />
      </Element>
      <Element name="pricebeginning">
        <PriceBeginning />
      </Element>
      <Element name="price">
        <Price />
      </Element>
      <Element name="contats">
        <Contats />
      </Element>
      {showButtonTop && <ButtonTop />}

    </div>
  )
}

export default App
