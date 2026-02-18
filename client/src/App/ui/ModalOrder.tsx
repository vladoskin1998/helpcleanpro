
import { IconsCheck, IconsChevronLeft, IconsClose } from "./Icons"
import { Input } from "./Input"
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from "react"
import { TextArea } from "./TextArea"
import { Button } from "./Button"
import { NOTIFICATIONHTTP } from "../../api"
import { CircleLoader } from "./Loader"
import { useTranslation } from 'react-i18next';


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

    const { t } = useTranslation();
    const formik = useFormik({
        initialValues: { city: 'Пловдив', name: '', phone: '' },
        validationSchema: Yup.object({
            city: Yup.string().required(t('modalorder.city_required')),
            name: Yup.string().required(t('modalorder.name_required')),
            phone: Yup.string()
                .required(t('modalorder.phone_required'))
                .matches(/^(359|359)?\d{8,10}$/, t('modalorder.phone_invalid')),
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
            alert("Warning: error with order, Admin - (089)-66-08-802")
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
                                <h5 dangerouslySetInnerHTML={{__html: t('modalorder.success_title')}} />
                                <div className="modal-order-alert-icon">
                                    <IconsCheck />
                                </div>
                                <h5>{t('modalorder.success_soon')}</h5>
                            </div>
                        ) : (
                            <form onSubmit={formik.handleSubmit}>
                                <h5 className="modal-order-title">
                                    {t('modalorder.title')}
                                </h5>
                                <Input
                                    placeholder={t('modalorder.city_placeholder')}
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
                                    placeholder={t('modalorder.name_placeholder')}
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
                                    placeholder={t('modalorder.phone_placeholder')}
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
                                    placeholder={t('modalorder.comment_placeholder')}
                                    value={comment}
                                    setValue={setComment}
                                />
                                <p className="modal-order-text">
                                    {t('modalorder.personal_data')}
                                </p>
                                <div className="comments-list-all modal-order-button">
                                    <Button
                                        disabled={loading}
                                        icon={<IconsChevronLeft />}
                                        text={t('modalorder.submit')}
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
