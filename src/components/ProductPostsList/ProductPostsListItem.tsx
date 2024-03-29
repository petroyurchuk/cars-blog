import { Card, CardContent, Button } from '@mui/material'
import './ProductPostsList.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'
import { Link } from 'react-router-dom'
type Props = {
    id: number
    image: string
    category: string
    title: string
    author: string
    date: string
    description: string
}
const PopularPostsListItem = ({
    id,
    image,
    category,
    title,
    author,
    date,
    description,
}: Props) => {
    const isLiked = useAppSelector((state) => state.like[id])
    const dispatch = useAppDispatch()
    return (
        <div className="list-item__container list-item">
            <Card className="list-item__card">
                <CardContent className="card-content__container">
                    <div className="list-item__wrapper-image">
                        <img
                            src={image}
                            alt={title}
                            className="list-item__image"
                        />
                        <Link
                            to={`/${
                                ['deals', 'life', 'tuning'].includes(category)
                                    ? `more/${category}`
                                    : ['reviews', 'tests'].includes(category)
                                    ? `${category}`
                                    : `cars/${category.split(' ').join('-')}`
                            }`}
                            className="list-item__link-category"
                        >
                            {category}
                        </Link>
                    </div>
                    <div className="list-item__text-info">
                        <h3 className="list-item__title">
                            <Link
                                to={`/posts/${id}`}
                                className="list-item__title-link"
                            >
                                {title}
                            </Link>
                        </h3>
                        <div className="list-item__info-about-post-wrapper">
                            <div>
                                <span className="list-item__author">
                                    {author}
                                </span>
                                <span className="list-item__data">
                                    {' '}
                                    - {date}
                                </span>
                            </div>

                            <Button
                                variant="outlined"
                                onClick={() => dispatch(toggleLike(id))}
                                className="like-btn"
                            >
                                {isLiked ? (
                                    <FavoriteIcon className="field-like-icon" />
                                ) : (
                                    <FavoriteBorderIcon className="not-field-like-icon" />
                                )}
                            </Button>
                        </div>
                        <p className="list-item__description">{description}</p>
                        <Link
                            to={`/posts/${id}`}
                            className="list-item__read-more-btn more-btn"
                        >
                            Read More
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default PopularPostsListItem
