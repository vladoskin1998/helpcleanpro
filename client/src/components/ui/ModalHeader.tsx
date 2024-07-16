import { Link as ScrollLink, Element } from "react-scroll"
import { IconsCall, IconsClose } from "./Icons"
import { Button } from "./Button"
import { baseURL } from "../../utils/utils"
import { useEffect, useState } from "react"

export const ModalHeader = ({
    open,
    close,
}: {
    open: boolean
    close: () => void
}) => {


    return (
        <>
          {  <div className={`modal-head ${open && "modal-head-open"}`}>
                <button className="modal-head-close" onClick={close}>
                    <IconsClose />
                </button>
                <div className="modal-head-mob  modal-head-header">
                    <img src={baseURL + "/Images/aboutlogo.svg"} alt="" />
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
                        <ScrollLink
                            to="comments"
                            smooth={true}
                            duration={700}
                            onClick={close}
                        >
                            Отзиви
                        </ScrollLink>
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
