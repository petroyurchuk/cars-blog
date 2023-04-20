import FooterCenterContentListPopularPosts from './FooterCenterContentListPopularPosts'
import FooterTitle from './FooterTitle'

type Props = {}
const FooterCenterContent = (props: Props) => {
    return (
        <div className="footer-center-content__container">
            <FooterTitle>popular posts</FooterTitle>
            <FooterCenterContentListPopularPosts />
        </div>
    )
}
export default FooterCenterContent
