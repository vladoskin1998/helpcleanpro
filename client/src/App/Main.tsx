import { useState } from "react"
import { useTranslation } from "react-i18next";
import { Button } from "./ui/Button"
import { IconsMain } from "./ui/Icons"

import { ModalOrder } from "./ui/ModalOrder"

import i18next from "i18next";

const Main = () => {
    const [openOrder, setOpenOrder] = useState(false)

    const handlerClose = () => {
        setOpenOrder(false)
    }
    const { t } = useTranslation();

    
    
    return (
        <div className="container">
            <div className="main">
                <div className="main-img">
                    <img src={"/Images/main.webp"} alt="healp clean pro bg" />
                </div>
                <div>
                    <h5 dangerouslySetInnerHTML={{__html: t('main.title')}} />
                    <p>{t('main.desc')}</p>
                    <div className="main-button">
                        <Button
                            icon={<IconsMain />}
                            text={t('main.order')}
                            onClick={() => setOpenOrder(true)}
                        />
                    </div>
                </div>
            </div>
            <ModalOrder open={openOrder} close={handlerClose} />
        </div>
    )
}

export default Main
