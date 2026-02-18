import { IconsMain } from "./ui/Icons"
import { Button } from "./ui/Button"
import { ModalOrder } from "./ui/ModalOrder"
import { useState } from "react"
import { useTranslation } from 'react-i18next';

const Price = () => {
    const { t } = useTranslation();
    const [openOrder, setOpenOrder] = useState(false)
    const handlerClose = () => {
        setOpenOrder(false)
    }

 const priceList = [
    {
        title: t('price.kitchen_title'),
        label: "Почистване на кухня от (75€./бр.)",
        list: [
            { name: t('price.kitchen_fridge'), label: "Хладилник",  price: "от 35.00 €" },
            { name: t('price.kitchen_oven'), label: "Фурна и котлони", price: "45.00 €" },
            { name: t('price.kitchen_hood'), label: "Абсорбатор", price: "20.00 €" },
            { name: t('price.kitchen_microwave'), label: "Микровълнова", price: "10.00 €" },
            { name: t('price.kitchen_full'), label: "Основно почистване на кухня (вътрешно и външно почистване на шкафове фурна, печка и абсорбатор)", price: "95.00 €" },
        ]
    },
    {
        title: t('price.bath_title'),
        label: "Санитарни помещения (€./бр.)",
        list: [
            { name: t('price.bath_small'), label: "Почистване на баня под 5 кв.м.", price: "50.00 €" },
            { name: t('price.bath_large'), label: "Почистване на баня над 5 кв.м.", price: "60.00 €" },
            { name: t('price.bath_wc'), label: "Почистване на самостоятелна тоалетна", price: "30.00 €" },
        ]
    },
    {
        title: t('price.repair_title'),
        label: "Почистване след ремонт (€./кв.м.)",
        list: [
            { name: t('price.repair_paint'), label: "Премахване на остатъци от боя, силикон, пръски и следи от боя, лепила, пяна и силикон, остатъци от фугираща смес по фугите на теракота и фаянс.", price: "4.50 €" },
            { name: t('price.repair_dust'), label: "Обезпрашаване на стени, измиване на прозорци, первази, тавани, шкафове, ключове, каси, полиране на всички повърхности и др.", price: "" },
            { name: t('price.repair_full'), label: "Основно почистване на подови настилки. Измиване на стъкла и дограма. Цялостно почистване на санитарните възли.", price: "" },
        ]
    },
    {
        title: t('price.floor_title'),
        label: "Подови настилки (€./кв.м.)",
        list: [
            { name: t('price.floor_vacuum'), label: "Прахосмукиране на твърди подови настилки", price: "1.25 €" },
            { name: t('price.floor_wet'), label: "Ръчно мокро почистване на твърди подови настилки", price: "1.00 €" },
        ]
    },
    {
        title: t('price.machine_title'),
        label: "Машинно пране (€./кв.м.)",
        list: [
            { name: t('price.machine_50'), label: "До 50 кв.м.", price: "3.75 €" },
            { name: t('price.machine_100'), label: "От 51 до 100 кв.м.", price: "2.75 €" },
            { name: t('price.machine_over'), label: "Над 100 кв.м.", price: "1.75€" },
        ]
    },
    {
        title: t('price.window_title'),
        label: "Прозорци и дограми (€./кв.м.)",
        list: [
            { name: t('price.window_low'), label: "Професионално почистване на прозорци и витрини стъкла едностранно (до 3м. височина)", price: "2.45 €" },
            { name: t('price.window_high'), label: "Професионално почистване на прозорци и витрини стъкла едностранно (над 3м. височина)", price: "2.95 €" },
            { name: t('price.window_frame'), label: "Почистване на дограма (линеен метър)", price: "2.00 €/м" },
            { name: t('price.window_after'), label: "Почистване на прозорци и дограма след основен ремонт, махане на лепенки, боя и силни замърсявания ", price: "от 5 €/м2" },
            { name: t('price.window_net'), label: "Почистване на комарници", price: "9.50 € | бр." },
        ]
    },
    {
        title: t('price.wash_title'),
        label: "Пране (€./бр.)",
        list: [
            { name: t('price.wash_sofa'), label: "Седалки на диван  (включително облегалка/възглавница)", price: "16.00 €" },
            { name: t('price.wash_chair'), label: "Стол (седалка, облегалка, подлакътници)", price: "12.00 €" },
            { name: t('price.wash_armchair'), label: "Фотьойл", price: "30.00 €" },
            { name: t('price.wash_taburet'), label: "Табуретка", price: "5.00 €" },
            { name: t('price.wash_mattress1'), label: "Матрак (единичен, едностранно) ", price: "20.00 €" },
            { name: t('price.wash_mattress2'), label: "Матрак (двоен, едностранно)", price: "40.00 €" },
        ]
    },
];

const priceListExtra = [
    { title: t('price.fire_title'), label: "Професионално почистване след пожар", price: "от 12 €/м2" },
    { title: t('price.flood_title'), label: "Професионално почистване след наводнение", price: "от 15 €/м2" },
];
    return (
        <>
            <div className="price">
                <div className="container">
                    <h5 className="price-title">{t('price.title')}</h5>
                    <div className="price-list">
                        {priceList?.map((item, index) => (
                            <div className="price-list-item" key={index}>
                                <h6>{item.title}</h6>
                                <ul>
                                    {item?.list?.map((pr, idx) => (
                                        <li key={idx}>
                                            <p>{pr.name}</p>
                                            <span className="price-value">
                                                {pr.price.split(' / ')[0]}
                                                {pr.price.split(' / ')[1] && pr.price.split(' / ')[1].trim() !== '' && (
                                                    <>
                                                        <span className="price-mobile-br"><br /></span>
                                                        <span className="price-mobile-slash">{" / "}</span>
                                                        {pr.price.split(' / ')[1]}
                                                    </>
                                                )}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="price-list price-list-1">
                        {priceListExtra.map((item, idx) => (
                            <div className="price-list-item price-list-item-1" key={idx}>
                                <h6>{item.title}</h6>
                                <p>{item.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="price-foot">
                        <div className="price-foot-box">
                            {t('price.foot1')}
                            <br />
                            <br />
                            {t('price.foot2')}
                            <br />
                            <br />
                            {t('price.foot3')}
                            <br />
                            <br />
                            {t('price.foot4')}
                        </div>
                        <div>
                            <p>
                                {t('price.foot5')}
                            </p>
                            <Button
                                icon={<IconsMain />}
                                text={t('price.contact')}
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