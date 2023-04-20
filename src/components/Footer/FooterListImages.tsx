import { Link } from 'react-router-dom'
import { postsArray } from 'utils/postsArray'
import './FooterContainer.scss'
type Props = {}
const FooterListImages = (props: Props) => {
    return (
        <div className="footer-list-images__container">
            {postsArray.slice(0, 4).map(({ id, image, title }) => (
                <Link
                    className="footer-list-images__link"
                    key={id}
                    to={`/posts/${id}`}
                >
                    <img
                        className="footer-list-images__image"
                        src={image}
                        alt={title}
                    />
                </Link>
            ))}
        </div>
    )
}
export default FooterListImages
