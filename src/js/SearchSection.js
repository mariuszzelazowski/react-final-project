import SectionTitle from "././SectionTitle";
import search from "../images/search.svg"
const SearchForm = () => {
    return (
        <div className="search-form-container">
            <form className="search-form-body">
                <label htmlFor="fname"/>
                <img className="search-form-img" src={search} alt=""/>
                <input type="text" id="fname" name="fname" placeholder="Type video title"/>
            </form>
        </div>
    )
}

const SearchSection = () => {
    return (
        <div className="search-section-container">
            <SectionTitle sectionTitle="search video"/>
            <SearchForm/>
        </div>
    )
}

export default SearchSection;