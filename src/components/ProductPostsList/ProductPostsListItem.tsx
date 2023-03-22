import { Button, Card, CardActions, CardContent } from '@mui/material'
import './ProductPostsList.scss'
type Props = {
    image: string
    category: string
    title: string
    author: string
    data: string
    description: string
}
const PopularPostsListItem = ({
    image,
    category,
    title,
    author,
    data,
    description,
}: Props) => {
    return (
        <div className="list-item__container list-item">
            <Card>
                <CardContent className="card-content__container">
                    <div className="list-item__wrapper-image">
                        <img
                            src={image}
                            alt={title}
                            className="list-item__image"
                        />
                        <a href="/" className="list-item__link-category">
                            {category}
                        </a>
                    </div>
                    <div className="list-item__text-info">
                        <h3 className="list-item__title">{title}</h3>
                        <div className="list-item__info-about-post-wrapper">
                            <span className="list-item__author">{author}</span>
                            <span className="list-item__data">{data}</span>
                        </div>
                        <p className="list-item__description">{description}</p>
                        <CardActions>
                            <Button>Read More</Button>
                        </CardActions>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
export default PopularPostsListItem
