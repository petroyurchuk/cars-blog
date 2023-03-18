import './BurgerMenu.scss'
import { useRef, useState } from 'react'
import BurgerMenuToggle from 'components/BurgerMenuToggle/BurgerMenuToggle'
type Props = {}
const BurgerMenu = (props: Props) => {
    const burgerRef = useRef<HTMLDivElement>(null)
    const [close, setClose] = useState<boolean>(false)
    const showBurger = () => {
        burgerRef.current?.classList.add('show')
        setClose(true)
    }
    const closeBurgerMenu = () => {
        burgerRef.current?.classList.remove('show')
        setClose(false)
    }
    return (
        <div ref={burgerRef} className="burger__container">
            {close && (
                <div
                    onClick={closeBurgerMenu}
                    className="burger-menu-toggle__close"
                    title="Close"
                ></div>
            )}
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
