import ArrayOfNamesOfSubMenu from 'utils/ArrayOfNamesOfSubMenu'
import MenuInSubMenu from 'components/MenuInSubMenu/MenuInSubMenu'
import ShowAllSubMenu from 'components/ShowAllSubMenu/ShowAllSubMenu'
import { useRef, useState } from 'react'
import './SubMenu.scss'
import { NavLink } from 'react-router-dom'

type PropsList = {
    index: number
}

const SubMenu = ({ index }: PropsList) => {
    const [hoveredItemId, setHoveredItemId] = useState(0)
    const [hoveredItem, setHoveredItem] = useState(false)
    const refs = useRef<Array<HTMLLIElement | null>>([])
    const handlerEnter = (itemId: number) => {
        if (!className.includes('more')) {
            setHoveredItemId(itemId)
            setHoveredItem(true)
            if (refs) {
                if (
                    !refs.current.map((item) =>
                        item?.classList.contains('active-item')
                    )
                ) {
                    refs.current[itemId]?.classList.add('active-item')
                } else {
                    refs.current.map((item) =>
                        item?.classList.remove('active-item')
                    )
                    refs.current[itemId]?.classList.add('active-item')
                }
            }
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

    const { namesOfList, className, linksNames } = filteredList

    return (
        <ul className={className} onMouseLeave={() => setHoveredItem(false)}>
            {namesOfList.map((name, idx) => {
                const ref = (el: HTMLLIElement | null) =>
                    (refs.current[idx] = el)
                return (
                    <li
                        ref={ref}
                        key={idx}
                        id={idx.toString()}
                        className="sub-menu__item"
                        onMouseEnter={() => handlerEnter(idx)}
                    >
                        <NavLink
                            to={linksNames[idx]}
                            className="sub-menu__link"
                        >
                            {name}
                        </NavLink>
                    </li>
                )
            })}
            {hoveredItem && <MenuInSubMenu index={hoveredItemId} />}
            {hoveredItem && <ShowAllSubMenu index={hoveredItemId} />}
        </ul>
    )
}

export default SubMenu
