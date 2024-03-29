import './Posts.scss'
import { Button } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleLike } from 'redux/likeReducer'
import { Link } from 'react-router-dom'
type Props = {
    id: number
    title: string
    category: string
    author: string
    date: string
    description: string
    image: string
}
const PostsListItem = ({
    id,
    title,
    category,
    author,
    date,
    description,
    image,
}: Props) => {
    const isLiked = useAppSelector((state) => state.like[id])
    const dispatch = useAppDispatch()
    return (
        <div className="post-wrapper item-post">
            <div className="item-post__image-wrapper">
                <img src={image} alt={title} />
            </div>
            <div className="item-post__text-wrapper">
                <h2 className="item-post__title">
                    <Link to={`/posts/${id}`} className="item-post-title__link">
                        {title}
                    </Link>
                </h2>
                <div className="item-post__post-info">
                    <Link
                        to={`/${
                            [
                                'deals',
                                'life',
                                'tuning',
                                'reviews',
                                'tests',
                            ].includes(category.toLowerCase())
                                ? `more/${category}`
                                : ['reviews', 'tests'].includes(category)
                                ? `${category}`
                                : `cars/${category
                                      .toLowerCase()
                                      .split(' ')
                                      .join('-')}`
                        }`}
                        className="item-post__link-category"
                    >
                        {category}
                    </Link>
                    <div className="list-item__info-about-post-wrapper">
                        <div>
                            <span className="item-post__author">{author}</span>
                            <span className="item-post__date">- {date}</span>
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
                </div>
                <div className="item-post__description">{description}</div>
                <Link
                    to={`/posts/${id}`}
                    className="item-post__link-read-more list-item__read-more-btn"
                >
                    Reade more
                </Link>
            </div>
        </div>
    )
}
export default PostsListItem
