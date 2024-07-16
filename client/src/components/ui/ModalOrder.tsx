import { Link as ScrollLink, Element } from "react-scroll"
import { IconsCheck, IconsChevronLeft, IconsClose } from "./Icons"
import { Input } from "./Input"
import { useEffect, useState } from "react"
import { TextArea } from "./TextArea"
import { Button } from "./Button"
import { NOTIFICATIONHTTP } from "../../api"

const validationInit = {
    name: true,
    phone: true,
    city: true,
}

export const ModalOrder = ({
    open,
    close,
}: {
    open: boolean
    close: () => void
}) => {
    const [city, setCity] = useState("Пловдив")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [comment, setComment] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    const [validation, setValidation] = useState(validationInit)

    const sendMessage = async () => {
        try {
            if (!name) {
                setValidation((s) => ({ ...s, name: false }))
                return
            }
            if (!phone) {
                setValidation((s) => ({ ...s, phone: false }))
                return
            }
            if (!city) {
                setValidation((s) => ({ ...s, city: false }))
                return
            }

            await NOTIFICATIONHTTP.sendMessage({
                city,
                name,
                phone,
                comment,
            })
            setShowAlert(true)

        } catch (error) {
            alert('Warning: error with order')
        }
    }
    const handlerPushNotification = () => {
        sendMessage()
    
        setTimeout(() => {
            setShowAlert(false)
            close()
        }, 2000)
    }

    useEffect(() => {
        setCity("Пловдив")
        setName("")
        setPhone("")
        setComment("")
    }, [open])
    return (
        <>
            {open && (
                <>
                    <div className="modal-order">
                        <button
                            className="modal-head-close modal-order-close"
                            onClick={close}
                        >
                            <IconsClose />
                        </button>
                        {
                            showAlert ? 
                            <div className="modal-order-alert flex-all-center">
                                <h5>Всичко е наред, <br/>заявката ви е оставена!</h5>
                                <div className="modal-order-alert-icon">
                                    <IconsCheck/>
                                </div>
                                <h5>всичко ще заблести Скоро!</h5>
                            </div>
                            : <> 
                            
                                <h5 className="modal-order-title">
                                    Оставете заявка
                                </h5>

                                <Input
                                    placeholder="Посочете вашия град"
                                    value={city}
                                    setValue={(s) => {
                                        setCity(s)
                                        setValidation(validationInit)
                                    }}
                                    validation={validation.city}
                                />
                                <Input
                                    placeholder="Вашето име"
                                    value={name}
                                    setValue={(s) => {
                                        setName(s)
                                        setValidation(validationInit)
                                    }}
                                    validation={validation.name}
                                />
                                <Input
                                    placeholder="Телефонен номер"
                                    value={phone}
                                    setValue={(s) => {
                                        setPhone(s)
                                        setValidation(validationInit)
                                    }}
                                    validation={validation.phone}
                                />
                                <TextArea
                                    placeholder="Коментар"
                                    value={comment}
                                    setValue={setComment}
                                />

                                <p className="modal-order-text">
                                    С натискането на бутона "Поръчка за
                                    почистване" вие се съгласявате с обработката
                                    на лични данни.
                                </p>
                                <div className="comments-list-all modal-order-button">
                                    <Button
                                        icon={<IconsChevronLeft />}
                                        text="Поръчай почистване"
                                        onClick={handlerPushNotification}
                                    />
                                </div>
                            </>
                        }
                    </div>

                    <div className="modal-background" />
                </>
            )}
        </>
    )
}
