import ArrayOfNamesOfSubMenu from 'utils/ArrayOfNamesOfSubMenu'
import MenuInSubMenu from 'components/MenuInSubMenu/MenuInSubMenu'
import ShowAllSubMenu from 'components/ShowAllSubMenu/ShowAllSubMenu'
import { useState } from 'react'
import './SubMenu.scss'

type PropsList = {
    index: number
}

const SubMenu = ({ index }: PropsList) => {
    const [hoveredItemId, setHoveredItemId] = useState(0)
    const [hoveredItem, setHoveredItem] = useState(false)

    const handlerEnter = (itemId: number) => {
        if (!className.includes('more')) {
            setHoveredItemId(itemId)
            setHoveredItem(true)
        } else {
            setHoveredItemId(itemId)
            setHoveredItem(false)
        }
    }
    const filteredList = ArrayOfNamesOfSubMenu.find(
        (item) => item.index === index
    )

    if (!filteredList) {
        return null
    }

    const { namesOfList, className } = filteredList

    return (
        <ul className={className} onMouseLeave={() => setHoveredItem(false)}>
            {namesOfList.map((name, idx) => (
                <li
                    key={idx}
                    className="sub-menu__item"
                    onMouseEnter={() => handlerEnter(idx)}
                >
                    <a href="/" className="sub-menu__link">
                        {name}
                    </a>
                </li>
            ))}
            {hoveredItem && <MenuInSubMenu index={hoveredItemId} />}
            {hoveredItem && <ShowAllSubMenu index={hoveredItemId} />}
        </ul>
    )
}

export default SubMenu
