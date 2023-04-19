import ArrayOfAllPostsHomePage from 'utils/ArrayOfAllPostsHomePage'
import {
    postsArray,
    postsDealsArray,
    postsReviewsArray,
    postsLifeArray,
    postsTestsArray,
    postsTuningArray,
} from 'utils/postsArray'
import {
    NewGenerationsData,
    FirstContactData,
    HiTechData,
    latestArticlesDataProduct,
} from 'utils/ProductPostsData'
import ProductPostsListItem from 'components/ProductPostsList/ProductPostsListItem'

import './FavoritesPostsList.scss'
type Props = {
    likedPosts: {
        [id: number]: boolean
    }
}
const FavoritesPostsList = ({ likedPosts }: Props) => {
    const bigArray = [
        ...postsArray,
        ...postsDealsArray,
        ...postsReviewsArray,
        ...postsLifeArray,
        ...postsTestsArray,
        ...postsTuningArray,
        ...NewGenerationsData,
        ...FirstContactData,
        ...HiTechData,
        ...latestArticlesDataProduct,
        ...ArrayOfAllPostsHomePage,
    ]

    const keys = Object.keys(likedPosts)
    const res = bigArray.filter(
        (item) => keys.includes(item.id.toString()) && likedPosts[item.id]
    )

    return (
        <div className="favorites-posts-list__container">
            {res.map(
                ({ id, title, category, image, author, date, description }) => (
                    <ProductPostsListItem
                        key={id}
                        id={id}
                        title={title}
                        category={category}
                        image={image}
                        author={author}
                        date={date}
                        description={description}
                    />
                )
            )}
        </div>
    )
}
export default FavoritesPostsList
