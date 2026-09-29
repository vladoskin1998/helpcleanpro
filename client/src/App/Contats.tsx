
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
import { useTranslation } from 'react-i18next';

const Contats = () => {
    const { t } = useTranslation();
    return (
        <div className="contacts">
            <div>
                <ScrollLink
                    to="main"
                    smooth={true}
                    duration={700}
                >
                    <img src={ "/Images/aboutlogo.png"} alt="help clean pro" />
                </ScrollLink>
            </div>
            <p className="contacts-title">{t('contacts.title')}</p>
            <div className="contacts-phone">{t('contacts.phone')} <div>{t('contacts.phone2')}</div> </div>
            <div className="contacts-net">
                <a href="https://www.instagram.com/helpcleanpro?stkn=MXJlMzh6eW14MjN6aA%3D%3D&utm_source=qr" target="_blank">
                    <IconsIns />
                </a>
                <a href="https://www.tiktok.com/@helpcleanpro?_r=1&_t=ZN-9A6soHcLGNi" target="_blank">
                    <IconsTiktok />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61550650637904" target="_blank">
                    <IconsFb />
                </a>
                <a href="https://t.me/myronov_clean" target="_blank">
                    <IconsTelegram />
                </a>
                <a href="https://wa.me/359896832216" target="_blank" rel="noopener noreferrer">
                    <IconsWa />
                </a>
                <a href="viber://chat?number=%2B359896832216" target="_blank" rel="noopener noreferrer">
                    <IconsViber />
                </a>
            </div>
            <div className=" comments-list-all contacts-button">
                <a href="tel:+359896832216">
                    <Button
                        icon={<IconsCall />}
                        text={t('contacts.button')}
                        onClick={() => {}}
                    />
                </a>
            </div>
            <p className="contacts-madeby">
                {t('contacts.madeby')} {" "}
                <a href="https://www.instagram.com/rv_studiocode?igsh=MXV6aDRrZWdjdTBzaA==">
                    <span>{t('contacts.studio')}</span>
                </a>
            </p>
            <div className="contacts-madeby">
                Help Clean Pro {new Date().getFullYear()}
            </div>
        </div>
    )
}

export default Contats
