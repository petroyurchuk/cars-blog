import ArrayOfNamesOfMenuInSubMenu from 'utils/ArrayOfNamesOfMenuInSubMenu'
import '../BigSubMenu/BigSubMenu.scss'
import './MenuInSubMenu.scss'

type PropsList = {
    index: number
}

const MenuInSubMenu = ({ index }: PropsList) => {
    const filteredList = ArrayOfNamesOfMenuInSubMenu.find(
        (item) => item.index === index
    )

    if (!filteredList) {
        return null
    }

    const { namesOfList, className, images, title } = filteredList

    return (
        <ul className={className}>
            {namesOfList.map((name, idx) => (
                <li key={idx} className="sub-menu__item">
                    <a href="/" className="sub-menu__link">
                        <div className="image-wrapper">
                            <img src={images[idx]} alt={title} />
                            <span className="title-link">{title}</span>
                        </div>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default MenuInSubMenu
