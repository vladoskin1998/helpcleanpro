import { Link as ScrollLink, Element } from "react-scroll"
import { IconsCheck, IconsChevronLeft, IconsClose } from "./Icons"
import { Input } from "./Input"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from "react"
import { TextArea } from "./TextArea"
import { Button } from "./Button"
import { NOTIFICATIONHTTP } from "../../api"
import { CircleLoader } from "./Loader"

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

    const [loading,setLoading] = useState<boolean>(false)
    const [comment, setComment] = useState("")
    const [showAlert, setShowAlert] = useState(false)

    const formik = useFormik({
        initialValues: { city: 'Пловдив', name: '', phone: '' },
        validationSchema: Yup.object({
            city: Yup.string().required('Город обязателен'),
            name: Yup.string().required('Имя обязательно'),
            phone: Yup.string()
                .required('Телефон обязателен')
                .matches(/^(\+359|359)?\d{8,10}$/, 'Телефон должен быть в формате 359XXXXXXXX'),
        }),
        onSubmit: async (values) => {
            await handlerPushNotification(values);
        },
        enableReinitialize: true,
    });

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [open])

    const sendMessage = async (values: { city: string; name: string; phone: string }) => {
        try {
            await NOTIFICATIONHTTP.sendMessage({
                city: values.city,
                name: values.name,
                phone: values.phone,
                comment,
            })
            setShowAlert(true)
            //@ts-ignore
            window?.gtag("event", "conversion", {
                send_to: "AW-16762469808/r_nuCPPPtOYZELD7-7g-",
                city: values.city,
                name: values.name,
                phone: values.phone,
                comment,
            })
            //@ts-ignore
            window?.fbq("track", "Lead", {
                city: values.city,
                name: values.name,
                phone: values.phone,
                comment,
            })
        } catch (error) {
            alert("Warning: error with order, ")
        }
    }
    const handlerPushNotification = async (values: { city: string; name: string; phone: string }) => {
        try {
            setLoading(true)
            await sendMessage(values)
            setTimeout(() => {
                setShowAlert(false)
                close()
            }, 2000)
        } catch (error) {
            setLoading(false)
            alert("Warning: error with order, Admin - 0896608802")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        setComment("")
    }, [open])

    if (loading) return <CircleLoader />

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
                        {showAlert ? (
                            <div className="modal-order-alert flex-all-center">
                                <h5>
                                    Всичко е наред, <br />
                                    заявката ви е оставена!
                                </h5>
                                <div className="modal-order-alert-icon">
                                    <IconsCheck />
                                </div>
                                <h5>всичко ще заблести Скоро!</h5>
                            </div>
                        ) : (
                            <form onSubmit={formik.handleSubmit}>
                                <h5 className="modal-order-title">
                                    Оставете заявка
                                </h5>
                                <Input
                                    placeholder="Посочете вашия град"
                                    name="city"
                                    value={formik.values.city}
                                    setValue={s => formik.setFieldValue('city', s)}
                                    validation={!(formik.errors.city && formik.touched.city)}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.city && formik.touched.city && (
                                    <div style={{ color: 'red', fontSize: 13, marginTop: 2 }}>{formik.errors.city}</div>
                                )}
                                <Input
                                    placeholder="Вашето име"
                                    name="name"
                                    value={formik.values.name}
                                    setValue={s => formik.setFieldValue('name', s)}
                                    validation={!(formik.errors.name && formik.touched.name)}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.name && formik.touched.name && (
                                    <div style={{ color: 'red', fontSize: 13, marginTop: 2 }}>{formik.errors.name}</div>
                                )}
                                <Input
                                    placeholder="Телефонен номер"
                                    name="phone"
                                    value={formik.values.phone}
                                    setValue={s => formik.setFieldValue('phone', s)}
                                    validation={!(formik.errors.phone && formik.touched.phone)}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.errors.phone && formik.touched.phone && (
                                    <div style={{ color: 'red', fontSize: 13, marginTop: 2 }}>{formik.errors.phone}</div>
                                )}
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
                                        disabled={loading}
                                        icon={<IconsChevronLeft />}
                                        text="Поръчай почистване"
                                        onClick={formik.submitForm}
                                    />
                                </div>
                            </form>
                        )}
                    </div>
                    <div className="modal-background" />
                </>
            )}
        </>
    )
}
