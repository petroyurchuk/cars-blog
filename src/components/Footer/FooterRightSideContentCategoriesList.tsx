import { Link } from 'react-router-dom'
import { popularCategories } from 'utils/ArrayOfNamesOfSubMenu'

type Props = {}
const FooterRightSideContentCategoriesList = (props: Props) => {
    const { namesOfList, linksNames } = popularCategories[0]
    return (
        <div className="footer-right-side-content-categories-list__container">
            {namesOfList.map((item, index) => (
                <Link
                    className="footer-right-side-content-categories-list__link"
                    to={linksNames[index]}
                >
                    <span className="footer-right-side-content-categories-list__link-name">
                        {item}
                    </span>
                    <span className="footer-right-side-content-categories-list__number">
                        7
                    </span>
                </Link>
            ))}
        </div>
    )
}
export default FooterRightSideContentCategoriesList
