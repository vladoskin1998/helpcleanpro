import { useEffect, useState } from "react"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from 'react-i18next';
import { IconsChevronLeft,  IconsPlus, IconsStar } from "../App/ui/Icons"
import { Input } from "../App/ui/Input"
import { TextArea } from "../App/ui/TextArea"
import { Button } from "../App/ui/Button"
import { COMMENTSHTTP } from "../api"
import {  CommentList } from "../types/types"
import { formatDate } from "../utils/utils"
import { animateScroll as scroll } from "react-scroll"
const validationInit = {
    name: true,
    phone: true,
    comment: true,
}
const Comments = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState(5)
    const [enterRating, setEnterRating] = useState(5)

    const [list, setList] = useState<CommentList>([])
    const [length, setLength] = useState(10)

    const [validation, setValidation] = useState(validationInit);

    // Formik для имени и телефона
    const { t } = useTranslation();
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required(t('comments.name_required')),
            phone: Yup.string()
                .matches(/^\+?\d{7,15}$/, t('comments.phone_invalid'))
                .required(t('comments.phone_required')),
        }),
        onSubmit: values => {
            setName(values.name);
            setPhone(values.phone);
            setValidation(validationInit);
            addCommentHandler(values.name, values.phone);
        },
    });

    const addCommentHandler = async (formName: string, formPhone: string) => {
        try {
            setIsLoading(true)
            if (!formName) {
                setValidation((s) => ({ ...s, name: false }))
                return
            }
            if (!formPhone) {
                setValidation((s) => ({ ...s, phone: false }))
                return
            }
            if (!comment) {
                setValidation((s) => ({ ...s, comment: false }))
                return
            }
            await COMMENTSHTTP.addComment({
                name: formName,
                phone: formPhone,
                comment,
                rating: rating || 5,
            })
            await getComments()
            localStorage.setItem('commentSubmitted', 'true')
            scrollToComments()
        } catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    const handleMouseEnter = (value: number) => {
        setEnterRating(value)
        setRating(0)
    }

    const handleMouseLeave = () => {
        setEnterRating(0)
    }

    const handleClick = (value: number) => {
        setRating(value)
    }
    const [commentSubmitted, setCommentSubmitted] = useState(false)

    useEffect(() => {
        const submitted = localStorage.getItem('commentSubmitted')
        if (submitted === 'true') {
            setCommentSubmitted(true)
        }
    }, [])

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        document.body.setAttribute('data-theme', theme === 'dark' ? 'dark' : '');
    }, []);
    const getComments = async () => {
        try {
            const comments = await COMMENTSHTTP.getComments()
            setList(comments.reverse())
        } catch (error) {
            console.log(error)
        }
    }
    const scrollToComments = () => {
        let offsetTop = document.getElementById("comments_id")?.offsetTop || 0
        scroll.scrollTo(offsetTop, {
            duration: 700,
            smooth: true,
        })
    }

    const addComment = async () => {
        try {
            setIsLoading(true)
            if (!name) {
                setValidation((s) => ({ ...s, name: false }))
                return
            }
            if (!phone) {
                setValidation((s) => ({ ...s, phone: false }))
                return
            }
            if (!comment) {
                setValidation((s) => ({ ...s, comment: false }))
                return
            }
            await COMMENTSHTTP.addComment({
                name,
                phone,
                comment,
                rating: rating || 5,
            })
            await getComments()
            localStorage.setItem('commentSubmitted', 'true')
            scrollToComments()
        } catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }


    const filteringList = list
        .filter(item => {
            const ratingOk = Number(item.rating) >= 4;

            return ratingOk;
        })
        .slice(0, length)

    useEffect(() => {
        getComments()
    }, [])

    return (
        <div className="comments" id="comments_id">
            <div className="container">
                <div className="comments-head">
                    <div className="comments-revievs">
                        <p className="comments-revievs-text">
                            {t('comments.average')}
                        </p>
                        <div className="comments-stars">
                            <div>
                                <IconsStar />
                                <IconsStar />
                                <IconsStar />
                                <IconsStar />
                                <IconsStar />
                            </div>
                            <p>
                                {Math.ceil(filteringList?.reduce((p, s) => ((Number(s?.rating) || 0) + p), 0) / filteringList?.length).toFixed(2) || ""}
                            </p>
                        </div>
                    </div>
                    <h5 className="comments-title" dangerouslySetInnerHTML={{__html: t('comments.title')}} />
                </div>
                {!!list.length && <div className="comments-list">
                    {filteringList?.map((item) => (
                        <div className="comments-list-item" key={item._id}>
                            <div className="comments-list-item-head">
                                <div className="comments-stars">
                                    <IconsStar />
                                    <p>{item.rating}</p>
                                </div>
                                |<b>{item.name}</b>|
                                <span>{formatDate(item.dateCreating)}</span>
                            </div>
                            <div className="comments-list-item-text">
                                {item.comment}
                            </div>
                        </div>
                    ))}
                </div>}
                <div className="comments-list-all">
                    {length >= list.length ? null : (
                        <Button
                            icon={<IconsPlus />}
                            text={t('comments.more')}
                            onClick={() => setLength((s) => s + 10)}
                        />
                    )}
                </div>
                {!commentSubmitted ? (
                    <form className="comments-form comments-list-item" onSubmit={formik.handleSubmit}>
                        <h5 className="comments-form-title">
                            {t('comments.form_title')}
                        </h5>
                        <p className="comments-form-text">
                            {t('comments.form_text')}
                        </p>
                        <div className="comments-form-inputs">
                            <Input
                                placeholder={t('comments.name_placeholder')}
                                value={formik.values.name}
                                setValue={formik.handleChange("name")}
                                validation={!formik.errors.name}
                            />
                            {formik.errors.name && <div style={{color: "red", position:'absolute', top: '100%'}}>{formik.errors.name}</div>}
                            <Input
                                placeholder={t('comments.phone_placeholder')}
                                value={formik.values.phone}
                                setValue={formik.handleChange("phone")}
                                validation={!formik.errors.phone}
                            />
                            {formik.errors.phone && <div style={{color: "red", position:'absolute', top: '100%'}}>{formik.errors.phone}</div>}
                        </div>
                        <div className="comments-form-textarea">
                            <TextArea
                                placeholder={t('comments.comment_placeholder')}
                                value={comment}
                                setValue={(s) => {
                                    setComment(s)
                                    setValidation(validationInit)
                                }}
                                validation={validation.comment}
                            />
                        </div>
                        {validation.comment && <div style={{color: "red", position:'absolute', top: '100%'}}>{validation.comment}</div>}
                        <div className="comments-form-req">
                            <div
                                className="comments-form-stars"
                                onMouseLeave={handleMouseLeave}
                            >
                                <span>{t('comments.your_rating')}</span>
                                <div className="comments-form-stars-raiting">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => handleClick(item)}
                                            onMouseEnter={() => handleMouseEnter(item)}
                                            className={`${item <= enterRating || item <= rating ? "comments-form-stars-active" : ""}`}
                                        >
                                            <IconsStar />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="comments-list-all">
                                <Button
                                    disabled={isLoading}
                                    icon={<IconsChevronLeft />}
                                    text={t('comments.submit')}
                                    onClick={formik.handleSubmit}
                                />
                            </div>
                        </div>
                    </form>
                ) : (
                    <div className="comments-form comments-list-item">
                        <h5 className="comments-form-title">
                            {t('comments.thanks_title')}
                        </h5>
                        <p className="comments-form-text">
                            {t('comments.thanks_text')}
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Comments
