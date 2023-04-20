import FooterCenterContent from './FooterCenterContent'
import FooterLeftSideContent from './FooterLeftSideContent'
import FooterListImages from './FooterListImages'
import FooterRightSideContent from './FooterRightSideContent'

type Props = {}
const FooterContainer = (props: Props) => {
    return (
        <div className="footer__container">
            <FooterListImages />
            <div className="footer-sides__wrapper">
                <FooterLeftSideContent />
                <FooterCenterContent />
                <FooterRightSideContent />
            </div>
        </div>
    )
}
export default FooterContainer
