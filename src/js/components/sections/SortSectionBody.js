import React from 'react';
const SortSectionBody = () => {
    return (
        <>
            <form className="sort-section-form-container">
                <div className="sort-section-form-box">
                    <input className="sort-section-form-radio-input" type="radio" id="title-a-z" name="" value=""/>
                    <label className="sort-section-form-radio-label" htmlFor="">Title A-Z</label>
                </div>
                <div className="sort-section-form-box">
                    <input className="sort-section-form-radio-input" type="radio" id="type-a-z" name="" value=""/>
                    <label className="sort-section-form-radio-label" htmlFor="">Type A-Z</label>
                </div>
                <div className="sort-section-form-box">
                    <input className="sort-section-form-radio-input" type="radio" id="title-z-a" name="" value=""/>
                    <label className="sort-section-form-radio-label" htmlFor="">Title Z-A</label>
                </div>
                <div className="sort-section-form-box">
                    <input className="sort-section-form-radio-input" type="radio" id="type-z-a" name="" value=""/>
                    <label className="sort-section-form-radio-label" htmlFor="">Type Z-A</label>
                </div>
            </form>
        </>
    );
};

export default SortSectionBody;