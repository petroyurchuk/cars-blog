import { useParams, useNavigate } from 'react-router-dom'
import './SwipeArticles.scss'
type Props = {}
const SwipeArticles = (props: Props) => {
    const { id } = useParams()
    const navigate = useNavigate()

    const changeArticle = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate(
            `/posts/${
                e.currentTarget.innerText.toLowerCase().includes('next')
                    ? parseInt(id!) + 1
                    : parseInt(id!) - 1
            }`
        )
    }
    return (
        <div className="swipe-articles__container">
            <button className="swipe-articles__button" onClick={changeArticle}>
                Previous Article
            </button>
            <button className="swipe-articles__button" onClick={changeArticle}>
                Next Article
            </button>
        </div>
    )
}
export default SwipeArticles
