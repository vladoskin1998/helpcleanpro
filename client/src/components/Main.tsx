import { useState } from "react"
import { Button } from "./ui/Button"
import { IconsMain } from "./ui/Icons"
import { Input } from "./ui/Input"
import { ModalOrder } from "./ui/ModalOrder"


const Main = () => {
    const [openOrder, setOpenOrder] = useState(false)

    const handlerClose = () => {
        setOpenOrder(false)
    }
    return (
        <div className="container">
            <div className="main">
                <div className="main-img">
                    <img src={"/Images/main.png"} alt="" />
                </div>
                <div>
                    <h5>
                        Чистотата <br /> започва при нас
                    </h5>
                    <p>Почистване на апартаменти, къщи и офиси</p>
                    <div className="main-button">
                        <Button
                            icon={<IconsMain />}
                            text="Поръчай почистванe"
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
