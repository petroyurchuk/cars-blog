import FooterLeftSideContent from './FooterLeftSideContent'
import FooterListImages from './FooterListImages'

type Props = {}
const FooterContainer = (props: Props) => {
    return (
        <div className="footer__container">
            <FooterListImages />
            <div className="footer-sides__wrapper">
                <FooterLeftSideContent />
            </div>
        </div>
    )
}
export default FooterContainer
