import './Menu.scss'
import ArrowDown from '@mui/icons-material/ArrowDropDownOutlined'
import SubMenu from 'components/SubMenu/SubMenu'
import ArrayOfNames from 'utils/ArrayOfNames'
type Props = {}
const Menu = (props: Props) => {
    return (
        <ul className="menu__list list-menu">
            <li className="list-menu__item">
                <a href="/" className="list-menu__link">
                    Home
                </a>
            </li>
            <li className="list-menu__item">
                <a href="/" className="list-menu__link">
                    Cars
                    <ArrowDown />
                </a>
                <SubMenu arrayOfNamesList={ArrayOfNames[0].arrayOfNamesList} />
            </li>
            <li className="list-menu__item">
                <a href="/" className="list-menu__link">
                    Reviews
                    <ArrowDown />
                </a>
            </li>
            <li className="list-menu__item">
                <a href="/" className="list-menu__link">
                    Tests
                    <ArrowDown />
                </a>
            </li>
            <li className="list-menu__item">
                <a href="/" className="list-menu__link">
                    More
                    <ArrowDown />
                </a>
            </li>
            <li className="list-menu__item">
                <a href="/" className="list-menu__link">
                    About
                </a>
            </li>
            <li className="list-menu__item">
                <a href="/" className="list-menu__link">
                    Contact
                </a>
            </li>
        </ul>
    )
}
export default Menu
