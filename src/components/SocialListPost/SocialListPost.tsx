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
            <a
                href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fdemo.tagdiv.com%252Fnewspaper_blog_cars%252Ftd-post-tesla-reportedly-loses-4000-on-each-model-s%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=uk_UA"
                target="_blank"
                rel="noreferrer"
                className="social-post-list__item item-social-post-list item-social-post-list_facebook"
            >
                <FacebookIcon className="item-social-post-list__icon" />
                <div className="item-social-post-list__text">Facebook</div>
            </a>
            <a
                href="https://twitter.com/intent/tweet?text=Tesla+Reportedly+Loses+%244%2C000+on+Each+Model+S&url=https%3A%2F%2Fdemo.tagdiv.com%2Fnewspaper_blog_cars%2Ftd-post-tesla-reportedly-loses-4000-on-each-model-s%2F&via=Newspaper+Cars+Blog+Demo"
                target="_blank"
                rel="noreferrer"
                className="social-post-list__item item-social-post-list item-social-post-list_twitter"
            >
                <TwitterIcon className="item-social-post-list__icon" />
                <div className="item-social-post-list__text">Twitter</div>
            </a>
            <a
                href="https://www.pinterest.com/pin/create/button/?url=https://demo.tagdiv.com/newspaper_blog_cars/td-post-tesla-reportedly-loses-4000-on-each-model-s/&media=https://demo.tagdiv.com/newspaper_blog_cars/wp-content/uploads/2015/12/62-1.jpg&description=Tesla+Reportedly+Loses+%244%2C000+on+Each+Model+S"
                target="_blank"
                rel="noreferrer"
                className="social-post-list__item item-social-post-list item-social-post-list_pinterest"
            >
                <PinterestIcon className="item-social-post-list__icon" />
                <div className="item-social-post-list__text">Pinterest</div>
            </a>
            <a
                href="https://api.whatsapp.com/send?text=Tesla+Reportedly+Loses+%244%2C000+on+Each+Model+S%20%0A%0A%20https://demo.tagdiv.com/newspaper_blog_cars/td-post-tesla-reportedly-loses-4000-on-each-model-s/"
                target="_blank"
                rel="noreferrer"
                className="social-post-list__item item-social-post-list item-social-post-list_whatsapp"
            >
                <WhatsAppIcon className="item-social-post-list__icon" />
                <div className="item-social-post-list__text">WhatsApp</div>
            </a>
        </div>
    )
}
export default SocialListPost
