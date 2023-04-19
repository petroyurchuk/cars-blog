import { useParams, useNavigate } from 'react-router-dom'
import './SwipeArticles.scss'
type Props = {}
const SwipeArticles = (props: Props) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const changeArticleOnPrevious = (
        e: React.MouseEvent<HTMLButtonElement>
    ) => {
        navigate(`/posts/${parseInt(id!) > 1 ? parseInt(id!) - 1 : id}`)
    }
    const changeArticleOnNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate(`/posts/${parseInt(id!) < 123 ? parseInt(id!) + 1 : id}`)
    }
    return (
        <div className="swipe-articles__container">
            <button
                className="swipe-articles__button"
                onClick={changeArticleOnPrevious}
            >
                Previous Article
            </button>
            <button
                className="swipe-articles__button"
                onClick={changeArticleOnNext}
            >
                Next Article
            </button>
        </div>
    )
}
export default SwipeArticles
