import ArrayOfNamesOfSubMenu from 'utils/ArrayOfNamesOfSubMenu'
import './SubMenu.scss'

type PropsList = {
    index: number
}

const SubMenu = ({ index }: PropsList) => {
    const filteredList = ArrayOfNamesOfSubMenu.find(
        (item) => item.index === index
    )

    if (!filteredList) {
        return null
    }

    const { namesOfList, className } = filteredList

    return (
        <ul className={className}>
            {namesOfList.map((name, idx) => (
                <li key={idx} className="sub-menu__item">
                    <a href="/" className="sub-menu__link">
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default SubMenu
