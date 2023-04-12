import { useParams } from 'react-router-dom'
import ArrayOfAllPostsHomePage from 'utils/ArrayOfAllPostsHomePage'
type Props = {}
const PostPage = (props: Props) => {
    const { id } = useParams()
    const post = ArrayOfAllPostsHomePage.filter(
        (item) => item.id === parseInt(id!)
    )
    console.log(id)
    return (
        <div className="cars-page__container">
            PostPage:{' '}
            {post.map((item) => (
                <h3 key={item.id}>{item.title}</h3>
            ))}
        </div>
    )
}
export default PostPage
