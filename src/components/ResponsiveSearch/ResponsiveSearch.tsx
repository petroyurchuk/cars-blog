import SearchIcon from '@mui/icons-material/Search'
import { useState, useRef } from 'react'

import './ResponsiveSearch.scss'
import SearchForm from './SearchForm'
type Props = {}
const ResponsiveSearch = (props: Props) => {
    const refSearch = useRef<HTMLDivElement>(null)
    const [close, setClose] = useState<boolean>(false)
    const showSearchForm = () => {
        refSearch.current?.classList.add('show')
        setClose(true)
    }
    const closeBurgerMenu = () => {
        refSearch.current?.classList.remove('show')
        setClose(false)
    }
    return (
        <div ref={refSearch} className="responsive-search__container">
            {close && (
                <div
                    onClick={closeBurgerMenu}
                    className="burger-menu-toggle__close"
                    title="Close"
                ></div>
            )}
            <div className="search-wrapper">
                <SearchIcon className="loop" onClick={showSearchForm} />
            </div>

            <SearchForm />
        </div>
    )
}
export default ResponsiveSearch
