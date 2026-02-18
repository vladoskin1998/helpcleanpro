import { useState } from "react"
import { useTranslation } from 'react-i18next';
import { IconsChekBlue, IconsChekWhite, IconsStar } from "./ui/Icons"
import { ModalOrder } from "./ui/ModalOrder"

const PriceBeginning = () => {
    const { t } = useTranslation();
    const [openOrder, setOpenOrder] = useState(false)
    const handlerClose = () => setOpenOrder(false)

    const package3Obj = t('pricebeginning.package3_list', { returnObjects: true }) as Record<string, string>;
    const package4Obj = t('pricebeginning.package4_list', { returnObjects: true }) as Record<string, string>;
    const package5Obj = t('pricebeginning.package5_list', { returnObjects: true }) as Record<string, string>;

    const package3 = Object.entries(package3Obj || {});
    const package4 = Object.entries(package4Obj || {});
    const package5 = Object.entries(package5Obj || {});


    console.log("package3",package3);
    
    return (
        <div className="pr-beg">
            <div className="container">
                <div className="pr-beg-who">
                    <div className="pr-beg-who-head">
                        <h5 className="pr-beg-who-title" dangerouslySetInnerHTML={{__html: t('pricebeginning.title')}} />
                        <p className="pr-beg-who-text">{t('pricebeginning.desc')}</p>
                    </div>
                    <div className="pr-beg-who-list">
                        <div className="pr-beg-who-list-item">
                            <h5 className="pr-beg-who-list-item-num">01</h5>
                            <p>{t('pricebeginning.area')}</p>
                        </div>
                        <div className="pr-beg-who-list-item">
                            <h5 className="pr-beg-who-list-item-num">02</h5>
                            <p>{t('pricebeginning.dirt')}</p>
                        </div>
                        <div className="pr-beg-who-list-item">
                            <h5 className="pr-beg-who-list-item-num">03</h5>
                            <p>{t('pricebeginning.chemicals')}</p>
                        </div>
                        <div className="pr-beg-who-list-item">
                            <h5 className="pr-beg-who-list-item-num">04</h5>
                            <p>{t('pricebeginning.method')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <img
                src={ "/Images/divider2.png"}
                alt="help clean pro"
                style={{ width: "100%" }}
                className="divider"
            />
            <div className="container">
                <div className="pr-beg-plan">
                    <h5 className="pr-beg-plan-title">{t('pricebeginning.plan_title')}</h5>
                    <p className="pr-beg-plan-text" dangerouslySetInnerHTML={{__html: t('pricebeginning.plan_desc')}} />
                    <div className="pr-beg-plan-list">
                        <div className="pr-beg-plan-list-item">
                            <div className="pr-beg-plan-list-star pr-beg-plan-list-star-1">
                                <IconsStar />
                                <IconsStar />
                                <IconsStar />
                            </div>
                            <p className="pr-beg-plan-list-undertitle pr-beg-plan-list-undertitle-1">
                                {t('pricebeginning.package3')}
                            </p>
                            <h5 className="pr-beg-mob pr-beg-plan-list-title pr-beg-plan-list-title-1">
                                {t('pricebeginning.from_275')}
                            </h5>
                            <ul className="pr-beg-plan-list-ul">
                                {package3?.map(([key, item]) => (
                                    <li key={key}>
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
                                {t('pricebeginning.order_now')}
                            </button>
                        </div>
                        <div>
                            <div className="pr-beg-plan-list-item pr-beg-plan-list-item-1">
                                <div className="pr-beg-plan-list-sale">
                                    {t('pricebeginning.best')}
                                </div>
                                <div className="pr-beg-plan-list-star ">
                                    <IconsStar />
                                    <IconsStar />
                                    <IconsStar />
                                    <IconsStar />
                                </div>
                                <p className="pr-beg-plan-list-undertitle ">
                                    {t('pricebeginning.package4')}
                                </p>
                                <h5 className="pr-beg-mob pr-beg-plan-list-title ">
                                    {t('pricebeginning.from_325')}
                                </h5>
                                <ul className="pr-beg-plan-list-ul">
                                    {package4?.map(([key, item]) => (
                                        <li key={key}>
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
                                    {t('pricebeginning.order_now')}
                                </button>
                            </div>
                            <div className="pr-beg-plan-list-item pr-beg-plan-list-item-1 pr-beg-plan-list-item-2 pr-beg-plan-list-item-last">
                                <p>{t('pricebeginning.after_repair')}</p>
                                <h5 className="pr-beg-mob">{t('pricebeginning.from_4')}</h5>
                                  <div className="pr-beg-plan-list-span-title ">
                                    {t('pricebeginning.deep_cleaning_up_to_60')}
                                    <br />
                                        {t('pricebeginning.deep_cleaning_over_70')}
                                </div>
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
                                <p className=" pr-beg-plan-list-undertitle pr-beg-plan-list-undertitle-1">
                                    {t('pricebeginning.package5')}
                                </p>
                                <h5 className="pr-beg-mob pr-beg-plan-list-title pr-beg-plan-list-title-1">
                                    {t('pricebeginning.from_375')}
                                </h5>
                                 
                                <ul className="pr-beg-plan-list-ul">
                                    {package5?.map(([key, item]) => (
                                        <li key={key}>
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
                                    {t('pricebeginning.order_now')}
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
