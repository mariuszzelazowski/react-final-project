import React from 'react';
const ShowTooltipsOption = () => {
    return (
        <div className="settings-section-tooltip-form-box">
            <form className="settings-section-tooltip-form" action="/action_page.php">
                <input className="settings-section-tooltip-checkbox" type="checkbox" id="tooltips" name="tooltips"
                       value="tooltips"/>
                <label className="settings-section-tooltip-title" htmlFor="tooltips">Show Tooltips</label>
            </form>
        </div>
    );
};

export default ShowTooltipsOption;