const FilterSectionBody = () => {
    return (
        <div className="filter-section-body">
            <form className="filter-section-form" action="/action_page.php">
                <div className="filter-section-form-row-first">
                    <input type="checkbox" id="live" name="live" value="live"/>
                    <label htmlFor="live">Live</label>
                    <input type="checkbox" id="series" name="series" value="series"/>
                    <label htmlFor="series">Series</label>
                </div>
                <div className="filter-section-form-row-second">
                    <input type="checkbox" id="movie" name="movie" value="movie"/>
                    <label htmlFor="movie">Movie</label>
                    <input type="checkbox" id="trailer" name="trailer" value="trailer"/>
                    <label htmlFor="trailer">Trailer</label>
                </div>
            </form>
        </div>
    )
}

export default FilterSectionBody;