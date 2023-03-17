import './BurgerMenu.scss'
import { useRef } from 'react'
import BurgerMenuToggle from 'components/BurgerMenuToggle/BurgerMenuToggle'
type Props = {}
const BurgerMenu = (props: Props) => {
    const burgerRef = useRef<HTMLDivElement>(null)
    const showBurger = () => {
        burgerRef.current?.classList.add('show')
    }
    const closeBurgerMenu = () => {
        burgerRef.current?.classList.remove('show')
    }
    return (
        <div ref={burgerRef} className="burger__container">
            <div
                onClick={closeBurgerMenu}
                className="burger-menu-toggle__close"
                title="Close"
            ></div>
            <div className="wrapper-burger-btn">
                <button onClick={showBurger} className="burger-btn">
                    <span className="burger-btn__span"></span>
                </button>
            </div>
            <BurgerMenuToggle />
        </div>
    )
}
export default BurgerMenu
