import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import SubMenu from 'components/SubMenu/SubMenu'
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
        console.log(`Hello ${itemId}`)
    }
    return (
        <ul className="header-bottom__main-menu main-menu">
            {items.map((item) => (
                <li
                    key={item.id}
                    className="main-menu__item"
                    onMouseEnter={() => handlerEnter(item.id)}
                >
                    <a href="/" className="main-menu__link">
                        {item.name}
                        {![1, 6, 7].includes(item.id) && <ArrowDropDown />}
                    </a>
                </li>
            ))}
            {hoveredItem && <SubMenu index={hoveredItemId} />}
        </ul>
    )
}
export default Menu
