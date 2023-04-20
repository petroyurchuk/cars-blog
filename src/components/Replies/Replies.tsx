import { Card, CardContent, TextareaAutosize, TextField } from '@mui/material'
import BreadCrumbs from 'components/BreadCrumbs/BreadCrumbs'
import FullDate from 'components/HeaderTop/FullDate'
import { useState } from 'react'

import './Replies.scss'

type Props = {}
type Reply = {
    name: string
    email: string
    text: string
}
type Error = {
    color: string
    colorForEmail: string
    colorForText: string
    textErrorForName: string
    textErrorForText: string
    textErrorForEmail: string
}

const Replies = (props: Props) => {
    const [errorMessage, setErrorMessage] = useState<Error>({
        color: '',
        colorForEmail: '',
        colorForText: '',
        textErrorForName: '',
        textErrorForText: '',
        textErrorForEmail: '',
    })
    const [reviews, setReviews] = useState<Reply[]>([])
    const [newReview, setNewReview] = useState<Reply>({
        name: '',
        email: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            email: e.target.value,
        }))
    }
    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }
    const onSend = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        let errors = {
            textErrorForName: '',
            textErrorForEmail: '',
            textErrorForText: '',
            color: '',
            colorForEmail: '',
            colorForText: '',
        }
        if (!/^[a-zA-Z]{2,20}$/.test(newReview.name)) {
            errors.textErrorForName = 'Name is required'
            errors.color = 'red'
        }

        if (newReview.text.length < 3) {
            errors.textErrorForText = 'Comment is required'
            errors.colorForText = 'red'
        }
        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(newReview.email)) {
            errors.textErrorForEmail = 'Email is required'
            errors.colorForEmail = 'red'
        }

        if (
            !errors.textErrorForName &&
            !errors.textErrorForEmail &&
            !errors.textErrorForText
        ) {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({ name: '', email: '', text: '' })
            setErrorMessage({
                color: '',
                colorForEmail: '',
                colorForText: '',
                textErrorForName: '',
                textErrorForEmail: '',
                textErrorForText: '',
            })
        } else {
            setErrorMessage((prevState) => ({
                ...prevState,
                ...errors,
            }))
        }
    }

    return (
        <>
            <BreadCrumbs data={{ title: `Comment ${reviews.length}` }} />

            {reviews.map(({ name, text }, i) => (
                <Card
                    sx={{
                        margin: '30px 0',
                    }}
                    key={i}
                    variant="outlined"
                >
                    <CardContent className="comment__wrapper">
                        <div className="comment__wrapper-user-photo">
                            <img src="/images/Replies/user-photo.png" alt="" />
                        </div>
                        <div className="comment__wrapper-user-info">
                            <div className="comment__wrapper-name-of-user">
                                <div className="comment__name">{name}</div>
                                <div className="comment__full-date">
                                    <FullDate />
                                </div>
                            </div>
                            <div>{text}</div>
                        </div>
                    </CardContent>
                </Card>
            ))}
            <form onSubmit={onSend}>
                <h3 className="reply__title">leave a reply</h3>
                <div className="reply__wrapper">
                    <div>
                        <TextareaAutosize
                            className="reply__message"
                            placeholder="Comment:"
                            value={newReview.text}
                            onChange={handleText}
                            style={{
                                borderColor: errorMessage.colorForText,
                            }}
                        />
                        <div className="reply-text-error">
                            {errorMessage.textErrorForText}
                        </div>
                    </div>
                    <div>
                        <TextField
                            size="small"
                            className="reply__name"
                            placeholder="Your name"
                            value={newReview.name}
                            onChange={handleName}
                            sx={{
                                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: errorMessage.color,
                                    },
                            }}
                        />
                        <div className="reply-text-error">
                            {errorMessage.textErrorForName}
                        </div>
                    </div>
                    <div>
                        <TextField
                            size="small"
                            className="reply__email"
                            placeholder="Your email"
                            value={newReview.email}
                            onChange={handleEmail}
                            sx={{
                                '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline':
                                    {
                                        borderColor: errorMessage.colorForEmail,
                                    },
                            }}
                        />
                        <div className="reply-text-error">
                            {errorMessage.textErrorForEmail}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="list-item__read-more-btn reply__button"
                    >
                        Post Comment
                    </button>
                </div>
            </form>
        </>
    )
}
export default Replies
