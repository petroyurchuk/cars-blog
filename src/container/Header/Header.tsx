import { Container } from '@mui/material'
import HeaderBottom from 'components/HeaderBottom/HeaderBottom'
import HeaderTop from 'components/HeaderTop/HeaderTop'
type Props = {}
const Header = (props: Props) => {
    return (
        <Container>
            <HeaderTop />
            <HeaderBottom />
        </Container>
    )
}
export default Header
