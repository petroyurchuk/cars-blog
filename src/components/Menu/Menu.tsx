import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import SubMenu from 'components/SubMenu/SubMenu'
import BigSubMenu from 'components/BigSubMenu/BigSubMenu'
import React, { useState } from 'react'

import './Menu.scss'
type ListItem = {
    id: number
    name: string
}
type ListProps = {
    items: ListItem[]
}
const Menu: React.FC<ListProps> = ({ items }) => {
    const [hoveredItemId, setHoveredItemId] = useState(0)
    const [hoveredItem, setHoveredItem] = useState(false)
    const handlerEnter = (itemId: number) => {
        setHoveredItemId(itemId)
        setHoveredItem(true)
    }
    return (
        <ul
            className="header-bottom__main-menu main-menu"
            onMouseLeave={() => setHoveredItem(false)}
        >
            {items.map((item) => (
                <li
                    key={item.id}
                    className="main-menu__item main-item"
                    onMouseEnter={() => handlerEnter(item.id)}
                >
                    <a href="/" className="main-menu__link main-link">
                        {item.name}
                        {![1, 6, 7].includes(item.id) && <ArrowDropDown />}
                    </a>
                </li>
            ))}
            {hoveredItem && <SubMenu index={hoveredItemId} />}
            {hoveredItem && <BigSubMenu index={hoveredItemId} />}
        </ul>
    )
}
export default Menu
