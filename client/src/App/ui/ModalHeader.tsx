import { Link as ScrollLink, } from "react-scroll"
import { IconsCall, IconsClose } from "./Icons"
import { Button } from "./Button"

import { useEffect } from "react"
import { Link} from 'react-router'
export const ModalHeader = ({
    open,
    close,
}: {
    open: boolean
    close: () => void
}) => {

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
          {  <div className={`modal-head ${open && "modal-head-open"}`}>
                <button className="modal-head-close" onClick={close}>
                    <IconsClose />
                </button>
                <div className="modal-head-mob  modal-head-header">
                    <img src={ "/Images/aboutlogo.svg"} alt="help clean pro" />
                    <p>24/7</p>
                </div>
                <ul className="modal-head-body">
                    <li>
                        <ScrollLink
                            to="about"
                            smooth={true}
                            duration={700}
                            onClick={close}
                        >
                            За нас
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="service"
                            smooth={true}
                            duration={700}
                            onClick={close}
                        >
                            Услуги
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="price"
                            smooth={true}
                            duration={700}
                            onClick={close}
                        >
                            Цени
                        </ScrollLink>
                    </li>
                    <li>
                        <a
                            href="/comment"
                            target="_blank"
                        >
                            Отзиви
                        </a>
                    </li>
                    <li>
                        <ScrollLink
                            to="contats"
                            smooth={true}
                            duration={700}
                            onClick={close}
                        >
                            Контакти
                        </ScrollLink>
                    </li>
                </ul>
                <div className=" modal-head-button comments-list-all contacts-button modal-head-mob ">
                    <a href="tel:+359896832216">
                        <Button
                            icon={<IconsCall />}
                            text=" +359 896 832 216"
                            onClick={() => {}}
                        />
                    </a>
                </div>
            </div>
            }
            {open && <div className="modal-background" />}
        </>
    )
}
