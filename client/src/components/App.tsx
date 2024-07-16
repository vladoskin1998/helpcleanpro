import React, { Suspense, useEffect, useState } from "react"
import { Element } from "react-scroll"
import { Loader } from "./ui/Loader"
import { ButtonTop } from "./ui/ButtonTop"
const About = React.lazy(() => import("./About"))
const Comments = React.lazy(() => import("./Comments"))
const Contats = React.lazy(() => import("./Contats"))
const Header = React.lazy(() => import("./Header"))
const Main = React.lazy(() => import("./Main"))
const Price = React.lazy(() => import("./Price"))
const PriceBeginning = React.lazy(() => import("./PriceBeginning"))
const Service = React.lazy(() => import("./Service"))

function App() {

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
    return (
        <div className="App">
            <Suspense fallback={<Loader/>}>
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
                <Element name="comments">
                    <Comments />
                </Element>
                <Element name="contats">
                    <Contats />
                </Element>
                {showButtonTop && <ButtonTop />}
            </Suspense>
        </div>
    )
}

export default App
