import { Container } from '@mui/material'
import Weather from './Weather'
import FullDate from './FullDate'

import './HeaderTop.scss'
import SignIn from './SignIn'
type Props = {}
const HeaderTop = (props: Props) => {
    return (
        <Container className="header-top__container">
            <div className="header-top__left-side-container">
                <Weather />
                <FullDate />
                <SignIn />
            </div>
        </Container>
    )
}
export default HeaderTop
