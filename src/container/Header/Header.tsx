import { Container } from '@mui/material'
import BurgerMenu from 'components/BurgerMenu/BurgerMenu'
import HeaderBottom from 'components/HeaderBottom/HeaderBottom'
import HeaderTop from 'components/HeaderTop/HeaderTop'
import Logo from 'components/Logo/Logo'
import ResponsiveLogo from 'components/ResponsiveLogo/ResponsiveLogo'
import ResponsiveSearch from 'components/ResponsiveSearch/ResponsiveSearch'

import './Header.scss'
type Props = {}
const Header = (props: Props) => {
    return (
        <Container className="header__container">
            <HeaderTop />
            <HeaderBottom />
            <Logo />
            <BurgerMenu />
            <ResponsiveLogo />
            <ResponsiveSearch />
        </Container>
    )
}
export default Header
