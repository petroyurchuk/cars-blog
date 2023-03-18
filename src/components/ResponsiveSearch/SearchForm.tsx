type Props = {}
const SearchForm = (props: Props) => {
    return (
        <div className="responsive-search__form common-background">
            <label htmlFor="search-input" className="responsive-search__label">
                search
            </label>
            <div className="wrapper-responsive-input">
                <input
                    id="search-input"
                    type="text"
                    className="responsive-search__input"
                />
            </div>
        </div>
    )
}
export default SearchForm
