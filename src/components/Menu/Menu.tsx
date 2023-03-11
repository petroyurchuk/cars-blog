import './Menu.scss'
import ArrowDown from '@mui/icons-material/ArrowDropDownOutlined'
import ContainerSubsMenu from 'components/ContainerSubsMenu/ContainerSubsMenu'
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
                <ContainerSubsMenu />
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
            <li className="list-menu__item list-menu__item_more">
                <a href="/" className="list-menu__link">
                    More
                    <ArrowDown />
                </a>
                <SubMenu arrayOfNamesList={ArrayOfNames[1].arrayOfNamesList} />
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
