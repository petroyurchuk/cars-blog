import { Container } from '@mui/material'
import { ArrayPopularPostsNames } from 'utils/ArrayOfNamesOfSubMenu'

import './PopularPosts.scss'

type Props = {}
const PopularPosts = (props: Props) => {
    return (
        <Container className="popular-posts__container">
            <div className="popular-posts__wrapper">
                <h3 className="popular-posts-title">Popular Posts</h3>
                <nav className="popular-posts__navigation navigation-popular-posts">
                    <ul className="navigation-popular-posts__menu menu-navigation-popular-posts">
                        {ArrayPopularPostsNames.map((item, index) => (
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
            </div>
        </Container>
    )
}
export default PopularPosts
