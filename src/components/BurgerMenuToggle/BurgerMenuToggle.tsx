import ArrayOfNamesOfSubMenu from 'utils/ArrayOfNamesOfSubMenu'
import { useRef, useState } from 'react'
import ArrowForward from '@mui/icons-material/ArrowForwardIos'
import BackArrow from '@mui/icons-material/ArrowBackIos'

import './BurgerMenuToggle.scss'
import Social from 'components/HeaderTop/Social'
import ResponsiveSignIn from 'components/ResponsiveSignIn/ResponsiveSignIn'

type Props = {}
const BurgerMenuToggle = (props: Props) => {
    const menuFirstItemRef = useRef<HTMLLIElement>(null)
    const menuSecondItemRef = useRef<HTMLLIElement>(null)
    const [signInForm, setSignInForm] = useState<boolean>(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const showNestedMenu = () => {
        menuFirstItemRef.current?.classList.toggle('show-nested-menu')
    }
    const showNestedMenuForSecondItem = () => {
        menuSecondItemRef.current?.classList.toggle('show-nested-menu-second')
    }
    const showSignInForm = () => {
        setSignInForm(true)
        containerRef.current?.classList.add('hide')
    }
    const backToMenuBurger = () => {
        setSignInForm(false)
        containerRef.current?.classList.remove('hide')
    }

    const filteredList = ArrayOfNamesOfSubMenu.find((item) => item.index === 2)
    const filteredSecondList = ArrayOfNamesOfSubMenu.find(
        (item) => item.index === 5
    )

    if (!filteredList || !filteredSecondList) {
        return null
    }

    const { namesOfList: namesOfFirstList } = filteredList
    const { namesOfList: namesOfNestedList } = filteredSecondList

    return (
        <div className="burger-menu-toggle__container">
            {signInForm && (
                <BackArrow
                    className="back-to-burger-menu"
                    onClick={backToMenuBurger}
                />
            )}
            {signInForm && <ResponsiveSignIn />}
            <div ref={containerRef} className="container-for-toggle">
                <Social />
                <div className="sign-in-active__container">
                    <span
                        className="sign-in-btn-activate"
                        onClick={showSignInForm}
                    >
                        Sign In
                    </span>
                </div>
                <ul className="mobile-menu">
                    <li className="mobile-menu__item">
                        <a href="/" className="mobile-menu__link">
                            Home
                        </a>
                    </li>
                    <li ref={menuFirstItemRef} className="mobile-menu__item">
                        <a href="/" className="mobile-menu__link">
                            Cars
                        </a>
                        <ArrowForward
                            onClick={showNestedMenu}
                            className="default-arrow"
                        />
                        <ul className="nested-menu">
                            {namesOfFirstList.map((item, index) => (
                                <li key={index} className="nested-menu__item">
                                    <a href="/" className="nested-menu__link">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="mobile-menu__item">
                        <a href="/" className="mobile-menu__link">
                            Reviews
                        </a>
                    </li>
                    <li className="mobile-menu__item">
                        <a href="/" className="mobile-menu__link">
                            Test
                        </a>
                    </li>
                    <li ref={menuSecondItemRef} className="mobile-menu__item">
                        <a href="/" className="mobile-menu__link">
                            More
                        </a>
                        <ArrowForward
                            onClick={showNestedMenuForSecondItem}
                            className="default-arrow"
                        />
                        <ul className="nested-menu">
                            {namesOfNestedList.map((item, index) => (
                                <li key={index} className="nested-menu__item">
                                    <a href="/" className="nested-menu__link">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="mobile-menu__item">
                        <a href="/" className="mobile-menu__link">
                            About
                        </a>
                    </li>
                    <li className="mobile-menu__item">
                        <a href="/" className="mobile-menu__link">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default BurgerMenuToggle
