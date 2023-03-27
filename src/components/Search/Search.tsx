import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
import './Search.scss'
type Props = {}
const Search = (props: Props) => {
    const [showInputField, setShowInputField] = useState<string>('default hide')
    const [query, setQuery] = useState<string>('')

    const showField = () => {
        setShowInputField((prevState) =>
            prevState === 'default hide' ? 'default show' : 'default hide'
        )
    }
    return (
        <div className="search__container">
            <div className="search-wrapper">
                <SearchIcon onClick={showField} className="loop" />
            </div>
            <div className={showInputField}>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button>Search</button>
            </div>
        </div>
    )
}
export default Search
