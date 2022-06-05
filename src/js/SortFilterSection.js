import SectionTitle from "././SectionTitle";
import SortSectionBody from "././SortSectionBody";
import FilterSectionBody from "././FilterSectionBody";

const SortFilterSection = () => {
    return (
        <div className="sort-filter-section">
            <div className="sort-section-container">
                <SectionTitle sectionTitle="sort by"/>
                <SortSectionBody/>
            </div>
            <div className="filter-section-container">
                <SectionTitle sectionTitle="filter by"/>
                <FilterSectionBody/>
            </div>
        </div>
    )
}

export default SortFilterSection;