import React from 'react';

const FilterSectionBody = () => {
    return (
        <>
            <form className="filter-section-form-container" action="/action_page.php">
                <div className="filter-section-form-box">
                    <input className="filter-section-form-checkbox-input" type="checkbox" id="live" name="live"
                           value="live"/>
                    <label className="filter-section-form-checkbox-label" htmlFor="live">Live</label>
                </div>
                <div className="filter-section-form-box">
                    <input className="filter-section-form-checkbox-input" type="checkbox" id="series" name="series"
                           value="series"/>
                    <label className="filter-section-form-checkbox-label" htmlFor="series">Series</label>
                </div>
                <div className="filter-section-form-box">
                    <input className="filter-section-form-checkbox-input" type="checkbox" id="movie" name="movie"
                           value="movie"/>
                    <label className="filter-section-form-checkbox-label" htmlFor="movie">Movie</label>
                </div>
                <div className="filter-section-form-box">
                    <input className="filter-section-form-checkbox-input" type="checkbox" id="trailer" name="trailer"
                           value="trailer"/>
                    <label className="filter-section-form-checkbox-label" htmlFor="trailer">Trailer</label>
                </div>
            </form>
        </>
    );
};

export default FilterSectionBody;