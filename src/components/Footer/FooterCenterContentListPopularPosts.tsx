import { Link } from 'react-router-dom'
import { postsArray, postsDealsArray } from 'utils/postsArray'

type Props = {}
const FooterCenterContentListPopularPosts = (props: Props) => {
    const arrayListPopularPosts = [
        ...postsDealsArray.slice(0, 2),
        ...postsArray.slice(0, 1),
    ]

    console.log(arrayListPopularPosts)
    return (
        <div className="footer-center-content-list-popular-posts__container">
            {arrayListPopularPosts.map(
                ({ id, title, image, category, date }) => (
                    <div
                        key={id}
                        className="footer-center-content-list-popular-posts__item"
                    >
                        <div className="footer-center-content-list-popular-posts__item-left-side-wrapper">
                            <img
                                className="footer-center-content-list-posts__image"
                                src={image}
                                alt={title}
                            />
                        </div>
                        <div className="footer-center-content-list-popular-posts__item-right-side-wrapper">
                            <Link
                                className="footer-center-content-list-posts__title"
                                to={`/posts/${id}`}
                            >
                                {title}
                            </Link>
                            <div className="footer-center-content-list-popular-posts__category-date">
                                <Link
                                    className="footer-center-content-list-posts__category"
                                    to={`/${
                                        [
                                            'deals',
                                            'life',
                                            'tuning',
                                            'reviews',
                                            'tests',
                                        ].includes(category.toLowerCase())
                                            ? `more/${category}`
                                            : ['reviews', 'tests'].includes(
                                                  category
                                              )
                                            ? `${category}`
                                            : `cars/${category
                                                  .toLowerCase()
                                                  .split(' ')
                                                  .join('-')}`
                                    }`}
                                >
                                    {category}
                                </Link>
                                <span className="footer-center-content-list-posts__date">
                                    {date}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    )
}
export default FooterCenterContentListPopularPosts
