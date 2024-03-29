import React, { useState } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { handleSearchFilter } from 'redux/postsReducer'

type Props = {
    nameOfPosts: string
    nameOfFilteredPosts: string
}
const SearchSortPostsOnPages = ({
    nameOfPosts,
    nameOfFilteredPosts,
}: Props) => {
    const [valueSearch, setValueSearch] = useState<string>('')
    const dispatch = useAppDispatch()
    const onChangeInputField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(e.target.value)
    }
    return (
        <div>
            <input
                onChange={onChangeInputField}
                type="text"
                className="search-input-field"
                value={valueSearch}
            />
            <button
                style={{ width: '85px', fontWeight: 'bold', fontSize: '17px' }}
                onClick={() =>
                    dispatch(
                        handleSearchFilter({
                            title: valueSearch,
                            nameOfPosts,
                            nameOfFilteredPosts,
                        })
                    )
                }
                className="search-btn"
            >
                Search
            </button>
        </div>
    )
}
export default SearchSortPostsOnPages
