import { socialListArray } from 'utils/socialListArray'

type Props = {}
const FooterLeftSideContentSocialList = (props: Props) => {
    return (
        <div className="footer-left-side-content-social-list__container">
            {socialListArray.map(({ id, icon, link }) => (
                <a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-left-side-content-social-list__item"
                >
                    <img
                        className="footer-left-side-content-social-list__item-icon"
                        src={icon}
                        alt="social"
                    />
                </a>
            ))}
        </div>
    )
}
export default FooterLeftSideContentSocialList
