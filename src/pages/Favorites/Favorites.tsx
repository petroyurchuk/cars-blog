import FavoritesPostsList from 'components/FavoritesPostsList/FavoritesPostsList'
import Title from 'components/Title/Title'
import { useAppSelector } from 'redux/hooks'

type Props = {}
const Favorites = (props: Props) => {
    const likedPosts = useAppSelector((state) => state.like)
    return (
        <div className="cars-page__container">
            <Title>Favorites</Title>
            <FavoritesPostsList likedPosts={likedPosts} />
        </div>
    )
}
export default Favorites
