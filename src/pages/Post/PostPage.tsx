import { useParams } from 'react-router-dom'
import ArrayOfAllPostsHomePage from 'utils/ArrayOfAllPostsHomePage'
import SocialList from 'components/Social/SocialList'
import { postPageInfo } from 'utils/postsArray'
import { socialListArray } from 'utils/socialListArray'
import Sidebar from 'components/SideBar/Sidebar'
import './Post.scss'
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
import SocialListPost from 'components/SocialListPost/SocialListPost'
type Props = {}
const PostPage = (props: Props) => {
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
    const { id } = useParams()
    const post = bigArray.filter((item) => item.id === parseInt(id!))

    return (
        <div className="cars-page__container">
            {post.map(({ id, title, author, date }) => (
                <div key={id}>
                    <h1 className="post-page__main-title">{title}</h1>
                    <div className="wrapper-meta-info">
                        <span className="list-item__data">By</span>{' '}
                        <span className="list-item__author">
                            {author}{' '}
                            <span className="list-item__data">- {date}</span>
                        </span>
                    </div>
                </div>
            ))}
            <div className="cars-page-main-content-wrapper">
                <div>
                    {post.map((item) => (
                        <div key={item.id}>
                            <img
                                width={'696px'}
                                src={item.image}
                                alt={item.title}
                            />
                        </div>
                    ))}
                    {postPageInfo.map(
                        ({ id, title, img, chapter, classNameForChapter }) => (
                            <div key={id}>
                                {title && (
                                    <h2 className="post-page__title">
                                        {title}
                                    </h2>
                                )}
                                <div
                                    className={
                                        'post-page-wrapper-chapter' +
                                        ' ' +
                                        classNameForChapter
                                    }
                                >
                                    <p className={classNameForChapter}>
                                        {chapter}
                                    </p>
                                    {img && (
                                        <img
                                            src={img}
                                            className={classNameForChapter}
                                            alt={title}
                                        />
                                    )}
                                </div>
                            </div>
                        )
                    )}
                    <SocialListPost />
                </div>

                <div className="wrapper-right-side">
                    <SocialList socialListData={socialListArray} />
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}
export default PostPage
