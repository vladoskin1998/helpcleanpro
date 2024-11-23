import { useEffect, useState } from "react"
import { ModalHeader } from "./ui/ModalHeader"

import { Logo } from "./ui/Icons"
import { Link as ScrollLink, Element } from "react-scroll"
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [showHeader, setShowHeader] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const handleScroll = () => {
        if (window.scrollY > lastScrollY && window.scrollY > 80) {
            setShowHeader(false)
        } else {
            setShowHeader(true)
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [lastScrollY])

    const handlerClose = () => {
        setIsOpen(false)
    }
    return (
        <div className={`header ${showHeader ? "header-show": "header-hide"}`}>
            <div className="header-content">
                <button className="header-img">
                <ScrollLink
                    to="main"
                    smooth={true}
                    duration={700}
                 
                >
                        <Logo/>
                </ScrollLink>
               
                </button>
                <div className="header-nav">
                    <div className="header-phone">
                        <span>
                            <a href="tel:+359896832216">+359 896 832 216</a>
                        </span>
                        <span>|</span>
                        <span>24/7</span>
                    </div>
                    <button
                        className="header-burger"
                        onClick={() => {
                            window.scrollTo({
                                behavior: "smooth",
                                top: 0,
                            })
                            setIsOpen(true)
                        }}
                    >
                        <div className="header-burger-line" />
                        <div className="header-burger-line" />
                    </button>
                </div>
            </div>
            <ModalHeader open={isOpen} close={handlerClose} />
        </div>
    )
}

export default Header
