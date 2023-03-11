import '../Menu/Menu.scss'
type Props = {
    arrayOfNamesList: string[]
}
const SubMenu = ({ arrayOfNamesList }: Props) => {
    return (
        <ul className="sub-menu__list list-menu">
            {arrayOfNamesList.map((item, index) => {
                return (
                    <li key={index} className="list-menu__item">
                        <a href="/" className="list-menu__link">
                            {item}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
export default SubMenu
