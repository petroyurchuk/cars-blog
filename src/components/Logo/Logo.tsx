import { Container } from '@mui/system'
import LogoImage from '../../assets/logo.png'
import './Logo.scss'
type Props = {}
const Logo = (props: Props) => {
    return (
        <Container className="logo__container">
            <a href="/" className="logo__link">
                <img src={LogoImage} alt="" />
            </a>
        </Container>
    )
}
export default Logo
