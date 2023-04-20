import FooterRightSideContentCategoriesList from './FooterRightSideContentCategoriesList'
import FooterTitle from './FooterTitle'

type Props = {}
const FooterRightSideContent = (props: Props) => {
    return (
        <div className="footer-right-side-content__container">
            <FooterTitle>popular category</FooterTitle>
            <FooterRightSideContentCategoriesList />
        </div>
    )
}
export default FooterRightSideContent
