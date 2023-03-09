import { Container } from '@mui/material'
import Weather from './Weather'

import './HeaderTop.scss'
type Props = {}
const HeaderTop = (props: Props) => {
    return (
        <Container className="header-top__container">
            <Weather />
        </Container>
    )
}
export default HeaderTop
