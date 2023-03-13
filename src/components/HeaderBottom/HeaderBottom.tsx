import { Container } from '@mui/material'
import Menu from 'components/Menu/Menu'
import ArrayOfNames from 'utils/ArrayOfNames'
import './HeaderBottom.scss'

type Props = {}
const HeaderBottom = (props: Props) => {
    return (
        <Container className="header-bottom__container">
            <Menu items={ArrayOfNames} />
        </Container>
    )
}
export default HeaderBottom
