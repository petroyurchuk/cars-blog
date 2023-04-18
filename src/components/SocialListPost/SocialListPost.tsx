import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import PinterestIcon from '@mui/icons-material/Pinterest'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ShareIcon from '@mui/icons-material/Share'
import './SocialListPost.scss'
type Props = {}
const SocialListPost = (props: Props) => {
    return (
        <div className="social-list-post__container">
            <div className="social-list-post__share-block">
                <ShareIcon className="social-list-post__share-icon" />
                <div className="social-list-post__share-text">Share</div>
            </div>
            <div className="social-post-list__item item-social-post-list item-social-post-list_facebook">
                <FacebookIcon className="item-social-post-list__icon" />
                <div className="item-social-post-list__text">Facebook</div>
            </div>
            <div className="social-post-list__item item-social-post-list item-social-post-list_twitter">
                <TwitterIcon className="item-social-post-list__icon" />
                <div className="item-social-post-list__text">Twitter</div>
            </div>
            <div className="social-post-list__item item-social-post-list item-social-post-list_pinterest">
                <PinterestIcon className="item-social-post-list__icon" />
                <div className="item-social-post-list__text">Pinterest</div>
            </div>
            <div className="social-post-list__item item-social-post-list item-social-post-list_whatsapp">
                <WhatsAppIcon className="item-social-post-list__icon" />
                <div className="item-social-post-list__text">WhatsApp</div>
            </div>
        </div>
    )
}
export default SocialListPost
