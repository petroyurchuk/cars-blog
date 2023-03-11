import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YoutubeIcon from '@mui/icons-material/YouTube'

import './Social.scss'
type Props = {}
const Social = (props: Props) => {
    return (
        <div className="social__container">
            <a className="social__link" href="/">
                <FacebookIcon className="social__facebook-icon social-icon" />
            </a>
            <a className="social__link" href="/">
                <InstagramIcon className="social__instagram-icon social-icon" />
            </a>
            <a className="social__link" href="/">
                <YoutubeIcon className="social__youtube-icon social-icon" />
            </a>
        </div>
    )
}
export default Social
