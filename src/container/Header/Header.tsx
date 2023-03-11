import { Container } from '@mui/material'
import HeaderBottom from 'components/HeaderBottom/HeaderBottom'
import HeaderTop from 'components/HeaderTop/HeaderTop'

import './Header.scss'
type Props = {}
const Header = (props: Props) => {
    return (
        <Container className="header__container">
            <HeaderTop />
            <HeaderBottom />
        </Container>
    )
}
export default Header
