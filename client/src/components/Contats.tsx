import { Link as ScrollLink } from "react-scroll"

import { Button } from "./ui/Button"
import {
    IconsCall,
    IconsFb,
    IconsIns,
    IconsTelegram,
    IconsTiktok,
    IconsViber,
    IconsWa,
} from "./ui/Icons"

const Contats = () => {
    return (
        <div className="contacts">
            <div>
                <ScrollLink
                    to="main"
                    smooth={true}
                    duration={700}
                 
                >
                    <img src={ "/Images/aboutlogo.svg"} alt="" />
                </ScrollLink>
            </div>
            <p className="contacts-title">Ние сме на линия 24/7</p>
            <p className="contacts-phone">+359 896 832 216</p>
            <div className="contacts-net">
                <a href="https://www.instagram.com/helpcleanpro/profilecard/?igsh=MXJlMzh6eW14MjN6aA==" target="_blank">
                    <IconsIns />
                </a>
                <a href="https://www.tiktok.com/@helpcleanpro2?_t=8rJLyUZuic2&_r=1" target="_blank">
                    <IconsTiktok />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61550650637904" target="_blank">
                    <IconsFb />
                </a>
                <a href="https://t.me/myronov_clean" target="_blank">
                    <IconsTelegram />
                </a>
                <a href="https://wa.me/359896832216" target="_blank">
                    <IconsWa />
                </a>
                <a href="viber://chat?number=+359896832216" target="_blank">
                    <IconsViber />
                </a>
            </div>
            <div className=" comments-list-all contacts-button">
                <a href="tel:+359896832216">
                    {" "}
                    <Button
                        icon={<IconsCall />}
                        text="свържете се с нас"
                        onClick={() => {}}
                    />
                </a>
            </div>
            <p className="contacts-madeby">
                Made by{" "}
                <a href="https://www.instagram.com/rv_studiocode?igsh=MXV6aDRrZWdjdTBzaA==">
                    <span>RV Studiocode</span>
                </a>
            </p>
            <div className="contacts-madeby">
                Help Clean Pro {new Date().getFullYear()}
            </div>
        </div>
    )
}

export default Contats
