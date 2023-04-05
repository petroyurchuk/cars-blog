import './Posts.scss'

type Props = {
    title: string
    category: string
    author: string
    date: string
    description: string
    image: string
}
const PostsListItem = ({
    title,
    category,
    author,
    date,
    description,
    image,
}: Props) => {
    return (
        <div className="post-wrapper item-post">
            <div className="item-post__image-wrapper">
                <img src={image} alt={title} />
            </div>
            <div className="item-post__text-wrapper">
                <h2 className="item-post__title">{title}</h2>
                <div className="item-post__post-info">
                    <a href="/" className="item-post__link-category">
                        {category}
                    </a>
                    <span className="item-post__author">{author}</span>
                    <span className="item-post__date">- {date}</span>
                </div>
                <div className="item-post__description">{description}</div>
                <a
                    href="/"
                    className="item-post__link-read-more list-item__read-more-btn"
                >
                    Reade more
                </a>
            </div>
        </div>
    )
}
export default PostsListItem
