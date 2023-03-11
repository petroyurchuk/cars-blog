import { Container } from '@mui/material'
import Menu from 'components/Menu/Menu'

import './HeaderBottom.scss'

type Props = {}
const HeaderBottom = (props: Props) => {
    return (
        <Container className="header-bottom__container">
            <Menu />
        </Container>
    )
}
export default HeaderBottom
