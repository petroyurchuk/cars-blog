import { Container } from '@mui/material'
import Weather from './Weather'

import './HeaderTop.scss'
import FullDate from './FullDate'
type Props = {}
const HeaderTop = (props: Props) => {
    return (
        <Container className="header-top__container">
            <div className="header-top__left-side-container">
                <Weather />
                <FullDate />
            </div>
        </Container>
    )
}
export default HeaderTop
