import { Link as ScrollLink, } from "react-scroll"
import { IconsCall, IconsClose } from "./Icons"
import { Button } from "./Button"
import { useEffect } from "react"
import { Link} from 'react-router'
import { LanguageSelect } from "./Language-select"
import { useTranslation } from 'react-i18next';
export const ModalHeader = ({
    open,
    close,
}: {
    open: boolean
    close: () => void
}) => {
    const { t } = useTranslation();
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);
    return (
        <>
            {<div className={`modal-head ${open && "modal-head-open"}`}>
                <button className="modal-head-close" onClick={close}>
                    <IconsClose />
                </button>
                <div className="modal-head-mob  modal-head-header">
                    <img src={"/Images/aboutlogo.svg"} alt="help clean pro" />
                    <div className="burger-select-language"><LanguageSelect /></div>
                </div>
                <ul className="modal-head-body">
                    <li>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={700}
                            onClick={close}
                        >
                            {t('modalheader.about')}
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="service"
                            smooth={true}
                            duration={700}
                            onClick={close}
                        >
                            {t('modalheader.service')}
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="price"
                            smooth={true}
                            duration={700}
                            onClick={close}
                        >
                            {t('modalheader.price')}
                        </ScrollLink>
                    </li>
                    <li>
                        <a
                            href="/comment"
                            target="_blank"
                        >
                            {t('modalheader.reviews')}
                        </a>
                    </li>
                    <li>
                        <ScrollLink
                            to="contats"
                            smooth={true}
                            duration={700}
                            onClick={close}
                        >
                            {t('modalheader.contacts')}
                        </ScrollLink>
                    </li>
                </ul>
                <div className=" modal-head-button comments-list-all contacts-button modal-head-mob ">
                    <a href="tel:+359896832216">
                        <Button
                            icon={<IconsCall />}
                            text={" " + t('modalheader.phone')}
                            onClick={() => { }}
                        />
                    </a>
                </div>
            </div>}
            {open && <div className="modal-background" />}
        </>
    )
}
