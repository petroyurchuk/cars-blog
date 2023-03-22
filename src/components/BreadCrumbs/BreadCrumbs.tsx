import { Container } from '@mui/material'

import './BreadCrumbs.scss'

type PropsBreadCrumbs = {
    data: {
        title: string
        namesOfList?: string[]
    }
}
const BreadCrumbs = ({ data }: PropsBreadCrumbs) => {
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
                                    <a
                                        href="/"
                                        className="menu-navigation-popular-posts__link"
                                    >
                                        {item}
                                    </a>
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
