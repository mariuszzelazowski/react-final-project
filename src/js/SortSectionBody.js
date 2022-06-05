const SortSectionBody = () => {
    return (
        <div className="sort-section-body">
            <form className="sort-section-form">
                <div className="sort-section-form-box-1">
                    <input type="radio" id="title-a-z" name="" value=""/>
                    <label htmlFor="">Title A-Z</label>
                </div>
                <div className="sort-section-form-box-2">
                    <input type="radio" id="type-a-z" name="" value=""/>
                    <label htmlFor="">Type A-Z</label>
                </div>
                <div className="sort-section-form-box-3">
                    <input type="radio" id="title-z-a" name="" value=""/>
                    <label htmlFor="">Title Z-A</label>
                </div>
                <div className="sort-section-form-box-4">
                    <input type="radio" id="type-z-a" name="" value=""/>
                    <label htmlFor="">Type Z-A</label>
                </div>
            </form>
        </div>
    )
}
export default SortSectionBody;