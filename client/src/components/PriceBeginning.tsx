import { useState } from "react"

import { IconsChekBlue, IconsChekWhite, IconsStar } from "./ui/Icons"
import { ModalOrder } from "./ui/ModalOrder"

const PACKAGE_3_STRAST = [
    "Сухо и мокро почистване на всички подови настилки",
    "Основно почистване на санитарни помещения",
    "Почистване на кухня. Шкафове (външно); Хладилник, фурна, микровълнова и т.н. вътрешно.",
    "Почистване на прах от всички открити повърхности",
    "Врати и каси, осветителни тела, ключове на лампи и контакти",
    "Отстраняване на паяжини и др.",
]
const PACKAGE_4_STRAST = [
    "Почистване на прозорци - стъкла и дограма",
    "Сухо и мокро почистване на всички подови настилки",
    "Основно почистване на санитарни помещения",
    "Почистване на кухня. Шкафове (външно); Хладилник, фурна, микровълнова и т.н. вътрешно. ",
    "Почистване на прах от всички открити повърхности",
    "Врати и каси, осветителни тела, ключове на лампи и контакти",
    "Отстраняване на паяжини и др.",
]
const PACKAGE_5_STRAST = [
    "Почистване на прозорци - стъкла и дограма",
    "Сухо и мокро почистване на всички подови настилки",
    "Основно почистване на санитарни помещения",
    "Почистване на кухня. Шкафове (отвън и отвътре); Хладилник, фурна, микровълнова и т.н. вътрешно. ",
    "Почистване на прах от всички открити повърхности",
    "Врати и каси, осветителни тела, ключове на лампи и контакти",
    "Отстраняване на паяжини и др.",
]

const PriceBeginning = () => {
    const [openOrder, setOpenOrder] = useState(false)

    const handlerClose = () => {
        setOpenOrder(false)
    }

    return (
        <div className="pr-beg">
            <div className="container">
                <div className="pr-beg-who">
                    <div className="pr-beg-who-head">
                        <h5 className="pr-beg-who-title">
                            От какво зависи <br /> цената на <br />
                            почистването?
                        </h5>
                        <p className="pr-beg-who-text">
                            Цената на услугите зависи от няколко фактора, сред
                            които се открояват:
                        </p>
                    </div>
                    <div className="pr-beg-who-list">
                        <div className="pr-beg-who-list-item">
                            <h5 className="pr-beg-who-list-item-num">01</h5>
                            <p>Площ и брой стаи</p>
                        </div>

                        <div className="pr-beg-who-list-item">
                            <h5 className="pr-beg-who-list-item-num">02</h5>
                            <p>Степен на замърсяване на помещението</p>
                        </div>

                        <div className="pr-beg-who-list-item">
                            <h5 className="pr-beg-who-list-item-num">03</h5>
                            <p>Арсенал от химикали, използвани за почистване</p>
                        </div>

                        <div className="pr-beg-who-list-item">
                            <h5 className="pr-beg-who-list-item-num">04</h5>
                            <p>Метод на почистване</p>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={ "/Images/divider2.png"}
                alt=""
                style={{ width: "100%" }}
                className="divider"
            />
            <div className="container">
                <div className="pr-beg-plan">
                    <h5 className="pr-beg-plan-title">Ценообразуващ план</h5>
                    <p className="pr-beg-plan-text">
                        Предоставяме цялостни услуги за почистване, <br />{" "}
                        съобразени с вашите нужди - от услуги за почистване
                    </p>

                    <div className="pr-beg-plan-list">
                        <div className="pr-beg-plan-list-item">
                            <div className="pr-beg-plan-list-star pr-beg-plan-list-star-1">
                                <IconsStar />
                                <IconsStar />
                                <IconsStar />
                            </div>
                            <p className="pr-beg-plan-list-undertitle pr-beg-plan-list-undertitle-1">
                                Пакет 3 звезди
                            </p>
                            <h5 className="pr-beg-plan-list-title pr-beg-plan-list-title-1">
                                от 3 лв/м.кв.
                            </h5>
                            <ul className="pr-beg-plan-list-ul">
                                {PACKAGE_3_STRAST.map((item, index) => (
                                    <li key={index}>
                                        <div>
                                            <IconsChekBlue />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="pr-beg-plan-list-but"
                                onClick={() => setOpenOrder(true)}
                            >
                                Поръчай сега
                            </button>
                        </div>

                        <div>
                            <div className="pr-beg-plan-list-item pr-beg-plan-list-item-1">
                                <div className="pr-beg-plan-list-sale">
                                    Найизгодно
                                </div>
                                <div className="pr-beg-plan-list-star ">
                                    <IconsStar />
                                    <IconsStar />
                                    <IconsStar />
                                    <IconsStar />
                                </div>
                                <p className="pr-beg-plan-list-undertitle ">
                                    Пакет 4 звезди
                                </p>
                                <h5 className="pr-beg-plan-list-title ">
                                    от 4.5 лв/м.кв.
                                </h5>
                                <ul className="pr-beg-plan-list-ul">
                                    {PACKAGE_4_STRAST.map((item, index) => (
                                        <li key={index}>
                                            <div>
                                                <IconsChekWhite />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="pr-beg-plan-list-but pr-beg-plan-list-but-1"
                                    onClick={() => setOpenOrder(true)}
                                >
                                    Поръчай сега
                                </button>
                            </div>
                            <div className="pr-beg-plan-list-item pr-beg-plan-list-item-1 pr-beg-plan-list-item-2 pr-beg-plan-list-item-last">
                                <p>Почистване след ремонт</p>
                                <h5>от 6 лв/м.кв.</h5>
                            </div>
                        </div>

                        <div>
                            <div className="pr-beg-plan-list-item">
                                <div className="pr-beg-plan-list-star pr-beg-plan-list-star-1">
                                    <IconsStar />
                                    <IconsStar />
                                    <IconsStar />
                                    <IconsStar />
                                    <IconsStar />
                                </div>
                                <p className="pr-beg-plan-list-undertitle pr-beg-plan-list-undertitle-1">
                                    Пакет 5 звезди
                                </p>
                                <h5 className="pr-beg-plan-list-title pr-beg-plan-list-title-1">
                                    от 5.5 лв/м.кв.
                                </h5>
                                <ul className="pr-beg-plan-list-ul">
                                    {PACKAGE_5_STRAST.map((item, index) => (
                                        <li key={index}>
                                            <div>
                                                <IconsChekBlue />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className="pr-beg-plan-list-but"
                                    onClick={() => setOpenOrder(true)}
                                >
                                    Поръчай сега
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalOrder open={openOrder} close={handlerClose} />
        </div>
    )
}

export default PriceBeginning
