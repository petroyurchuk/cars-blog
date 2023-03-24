import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

import './BreadCrumbs.scss'

type PropsBreadCrumbs = {
    data: {
        title: string
        namesOfList?: string[]
        namesOfLinks?: string[]
    }
}
const BreadCrumbs = ({ data }: PropsBreadCrumbs) => {
    const filterNamesOfList = data.namesOfLinks?.filter((item) => item)
    if (!filterNamesOfList) {
        return (
            <Container className="bread-crumbs__container">
                <div className="popular-posts__wrapper">
                    <h3 className="popular-posts-title">{data.title}</h3>
                </div>
            </Container>
        )
    }
    return (
        <Container className="bread-crumbs__container">
            <div className="popular-posts__wrapper">
                <h3 className="popular-posts-title">{data.title}</h3>

                {data.namesOfList && (
                    <nav className="popular-posts__navigation navigation-popular-posts">
                        <ul className="navigation-popular-posts__menu menu-navigation-popular-posts">
                            {data.namesOfList.map((item, index) => (
                                <li
                                    key={index}
                                    className="menu-navigation-popular-posts__item"
                                >
                                    <Link
                                        to={filterNamesOfList[index]}
                                        className="menu-navigation-popular-posts__link"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </div>
        </Container>
    )
}
export default BreadCrumbs
