import LogoImage from '../../assets/responsive-logo.png'
import FooterLeftSideContentSocialList from './FooterLeftSideContentSocialList'

type Props = {}
const FooterLeftSideContent = (props: Props) => {
    return (
        <div className="footer-left-side-content__container">
            <img src={LogoImage} alt="logo" />
            <div className="footer-left-side-content__text-info-wrapper">
                <p className="footer-left-side-content__text">
                    Newspaper is your news, entertainment, music fashion
                    website. We provide you with the latest breaking news and
                    videos straight from the entertainment industry.
                </p>
                <div className="footer-left-side-content__contact-info-wrapper">
                    <span className="footer-left-side-content__contact">
                        Contact us:
                    </span>
                    <a
                        href="mailto:contact@yoursite.com"
                        className="footer-left-side-content__contact-email"
                    >
                        contact@yoursite.com
                    </a>
                </div>
                <FooterLeftSideContentSocialList />
            </div>
        </div>
    )
}
export default FooterLeftSideContent
