import { useEffect, useState } from "react"
import { IconsChevronLeft, IconsMain, IconsPlus, IconsStar } from "./ui/Icons"
import { Input } from "./ui/Input"
import { TextArea } from "./ui/TextArea"
import { Button } from "./ui/Button"
import { COMMENTSHTTP } from "../api"
import { Comment, CommentList } from "../types/types"
import { formatDate } from "../utils/utils"
import { animateScroll as scroll } from "react-scroll"
const validationInit = {
    name: true,
    phone: true,
    comment: true,
}
const Comments = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState(5)
    const [enterRating, setEnterRating] = useState(5)

    const [list, setList] = useState<CommentList>([])
    const [length, setLength] = useState(10)

    const [validation, setValidation] = useState(validationInit)

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
            scrollToComments()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <div className="comments" id="comments_id">
            <div className="container">
                <div className="comments-head">
                    <div className="comments-revievs">
                        <p className="comments-revievs-text">
                            Средна оценка на нашите почиствания:
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
                                {Math.ceil(list?.reduce((p, s) => ((Number(s?.rating) || 0) + p ),0)/list?.length) || ""}
                            </p>
                        </div>
                    </div>

                    <h5 className="comments-title">
                        Отзиви за <br /> нашите услуги
                    </h5>
                </div>
                {
                    !!list.length &&   <div className="comments-list">
                    {list.slice(0, length).map((item) => (
                        <div className="comments-list-item" key={item._id}>
                            <div className="comments-list-item-head">
                                <div className="comments-stars">
                                    <IconsStar />
                                    <p>{item.rating }</p>
                                </div>
                                |<b>{item.name}</b>|
                                <span>{formatDate(item.dateCreating)}</span>
                            </div>
                            <div className="comments-list-item-text">
                                {item.comment}
                            </div>
                        </div>
                    ))}
                </div>
                }
              
                <div className="comments-list-all">
                    {length >= list.length ? (
                        <></>
                    ) : (
                        <Button
                            icon={<IconsPlus />}
                            text="повече отзиви"
                            onClick={() => setLength((s) => s + 10)}
                        />
                    )}
                </div>
                <div className="comments-form comments-list-item">
                    <h5 className="comments-form-title">
                        Моля, напишете отзивите си
                    </h5>
                    <p className="comments-form-text">
                        Вашите отзиви ни помагат да подобрим услугите си.
                    </p>
                    <div className="comments-form-inputs">
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
                    </div>
                    <div className="comments-form-textarea">
                        <TextArea
                            placeholder="Напишете отзивите си тук"
                            value={comment}
                            setValue={(s) => {
                                setComment(s)
                                setValidation(validationInit)
                            }}
                            validation={validation.comment}
                        />
                    </div>
                    <div className="comments-form-req">
                        <div
                            className="comments-form-stars"
                            onMouseLeave={handleMouseLeave}
                        >
                            <span>Вашата преценка:</span>
                            <div className="comments-form-stars-raiting">
                                {[1, 2, 3, 4, 5].map((item) => (
                                    <button
                                        onClick={() => handleClick(item)}
                                        onMouseEnter={() =>
                                            handleMouseEnter(item)
                                        }
                                        className={`${
                                            item <= enterRating ||
                                            item <= rating
                                                ? "comments-form-stars-active"
                                                : ""
                                        }`}
                                    >
                                        <IconsStar />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="comments-list-all">
                            <Button
                                icon={<IconsChevronLeft />}
                                text="Оставете отзив"
                                onClick={addComment}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments
