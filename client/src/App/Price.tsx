import { title } from "process"
import { IconsMain } from "./ui/Icons"
import { Button } from "./ui/Button"

import { ModalOrder } from "./ui/ModalOrder"
import { useState } from "react"

const PRICE_1 = {
    title: "Почистване на кухня (лв./бр.)",
    list: [
        {
            name: "Хладилник",
            price: "50,00 лв.",
        },
        {
            name: "Фурна и котлони",
            price: "60,00 лв.",
        },
        {
            name: "Абсорбатор",
            price: "30,00 лв.",
        },
        {
            name: "Микровълнова",
            price: "20,00 лв.",
        },
        {
            name: "Основно почистване на кухня (вътрешно и външно почистване на шкафове, мивка, плотове, рафтове, етажерки и др., лектроуреди отвън и отвътре)",
            price: "150,00 лв.",
        },
    ],
}

const PRICE_2 = {
    title: "Санитарни помещения (лв./бр.)",
    list: [
        {
            name: "Почистване на баня под 5 кв.м.",
            price: "50,00 лв.",
        },
        {
            name: "Почистване на баня над 5 кв.м.",
            price: "70,00 лв.",
        },
        {
            name: "Почистване на самостоятелна тоалетна",
            price: "40,00 лв.",
        },
    ],
}

const PRICE_3 = {
    title: "Почистване след ремонт (лв./кв.м.)",
    list: [
        {
            name: "Премахване на остатъци от боя, силикон, пръски и следи от боя, лепила, пяна и силикон, остатъци от фугираща смес по фугите на теракота и фаянс.",
            price: "8 лв.",
        },
        {
            name: "Обезпрашаване на стени, измиване на прозорци, первази, тавани, шкафове, ключове, каси, полиране на всички повърхности и др.",
            price: "",
        },
        {
            name: "Основно почистване на подови настилки. Измиване на стъкла и дограма. Цялостно почистване на санитарните възли.",
            price: "",
        },
    ],
}

const PRICE_4 = {
    title: "Подови настилки (лв./кв.м.)",
    list: [
        {
            name: "Прахосмукиране на твърди подови настилки",
            price: "1,50 лв.",
        },
        {
            name: "Ръчно мокро почистване на твърди подови настилки",
            price: "2,00 лв.",
        },
    ],
}

const PRICE_5 = {
    title: "Машинно изпиране (лв./кв.м.)",
    list: [
        {
            name: "До 50 кв.м.",
            price: "4,50 лв.",
        },
        {
            name: "От 51 до 100 кв.м.",
            price: "2,50 лв.",
        },
        {
            name: "Над 100 кв.м.",
            price: "2,00 лв.",
        },
    ],
}

const PRICE_6 = {
    title: "Прозорци и дограми (лв./кв.м.)",
    list: [
        {
            name: "Професионално почистване на прозорци и витрини стъкла едностранно (до 3м. височина)",
            price: "3,00 лв.",
        },
        {
            name: "Професионално почистване на прозорци и витрини стъкла едностранно (над 3м. височина)",
            price: "4,50 лв.",
        },
        {
            name: "Почистване на дограма (линеен метър)",
            price: "След оглед",
        },
        {
            name: "Почистване на прозорци и дограма след основен ремонт, махане на лепенки, боя и силни замърсявания ",
            price: "След оглед",
        },
        {
            name: "Почистване на комарници",
            price: "9,00 лв. / бр.",
        },
    ],
}

const PRICE_7 = {
    title: "Пране (лв./бр.)",
    list: [
        {
            name: "Седалки на диван  (включително облегалка/възглавница)",
            price: "25,00 лв.",
        },
        {
            name: "Стол (седалка, облегалка, подлакътници)",
            price: "18,00 лв.",
        },
        {
            name: "Фотьойл",
            price: "50,00 лв.",
        },
        {
            name: "Табуретка",
            price: "5,00 лв.",
        },
        {
            name: "Матрак (единичен, едностранно) ",
            price: "25,00 лв.",
        },
        {
            name: "Матрак (двоен, едностранно)",
            price: "40,00 лв.",
        },
    ],
}

const PRICE_8 = {
    title: "Професионално почистване след пожар",
    price: "по договаряне",
}
const PRICE_9 = {
    title: "Професионално почистване след наводнение",
    price: "по договаряне",
}

 const Price = () => {

    const [openOrder, setOpenOrder] = useState(false)

    const handlerClose = () => {
        setOpenOrder(false)
    }

    console.log(openOrder);
    
    
    return (
        <>
            <div className="price">
                <div className="container">
                    <h5 className="price-title">Цени за почистване</h5>
                    <div className="price-list">
                        {[
                            PRICE_1,
                            PRICE_2,
                            PRICE_3,
                            PRICE_4,
                            PRICE_5,
                            PRICE_6,
                            PRICE_7,
                        ].map((item, index) => (
                            <div className="price-list-item">
                                <h6>{item.title}</h6>
                                <ul>
                                    {item?.list.map((pr) => (
                                        <li>
                                            <p>{pr.name}</p>
                                            <span>{pr.price}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="price-list price-list-1">
                        {[PRICE_8, PRICE_9].map((item) => (
                            <div className="price-list-item price-list-item-1">
                                <h6>{item.title}</h6>
                                <p>{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="price-foot">
                        <div className="price-foot-box">
                            Добавка върху основната цена: от 15 до 100% при
                            празнични дни, неблагоприятни условия, нощен труд,
                            стълбища и силна замърсеност или експресна поръчка.
                            <br />
                            <br />
                            Всички цени може да се повишат след оглед на обекта,
                            в зависимост от степента на замърсяване и достъпа за
                            почистване.
                        </div>
                        <div>
                            <p>
                                Ако не виждате цените за почистване, които Ви{" "}
                                <br />
                                интересуват, свържете се с нас.
                            </p>
                            <Button
                                icon={<IconsMain />}
                                text="свържете се с нас"
                                onClick={() => setOpenOrder(true)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ModalOrder open={openOrder} close={handlerClose} />
            {/* <img src={ "/Images/divider3.png"} alt="help clean pro" style={{ width: "100%" }} className="divider"/> */}
        </>
    )
}


export default Price