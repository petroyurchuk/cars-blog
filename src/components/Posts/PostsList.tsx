import { PropsPosts } from 'utils/postsArray'
import PostsListItem from './PostsListItem'
import './Posts.scss'

type Props = {
    posts: PropsPosts[]
}
const PostsList = ({ posts }: Props) => {
    return (
        <div className="posts-items__wrapper">
            {posts.map(
                ({ id, title, description, image, author, date, category }) => (
                    <PostsListItem
                        key={id}
                        id={id}
                        image={image}
                        title={title}
                        description={description}
                        author={author}
                        date={date}
                        category={category}
                    />
                )
            )}
        </div>
    )
}
export default PostsList
