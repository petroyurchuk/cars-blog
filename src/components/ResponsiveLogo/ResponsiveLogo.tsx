import { Container } from '@mui/system'
import LogoImage from '../../assets/responsive-logo.png'
import './ResponsiveLogo.scss'
type Props = {}
const ResponsiveLogo = (props: Props) => {
    return (
        <Container className="responsive-logo__container">
            <a href="/" className="responsive-logo__link">
                <img src={LogoImage} alt="responsive logo" />
            </a>
        </Container>
    )
}
export default ResponsiveLogo
