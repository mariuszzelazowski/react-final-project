import SectionTitle from "../elements/SectionTitle";
import SortSectionBody from "./SortSectionBody";
import FilterSectionBody from "./FilterSectionBody";

const SortFilterSection = () => {
    return (
        <div className="sort-filter-section-container">
            <div className="sort-filter-section-headers">
                <SectionTitle sectionTitle="sort by"/>
                <SectionTitle sectionTitle="filter by"/>
            </div>
            <div className="sort-filter-section-forms">
                <SortSectionBody/>
                <FilterSectionBody/>
            </div>
        </div>
    );
};

export default SortFilterSection;