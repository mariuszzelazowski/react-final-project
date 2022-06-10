import LogoSection from "../sections/LogoSection";
import SortFilterSection from "../sections/SortFilterSection";
import SearchSection from "../sections/SearchSection";
import NowPlayingSection from "../sections/NowPlayingSection";

const LeftSideContainer = () => {
    return (
        <section className="left-side-container">
            <LogoSection/>
            <SearchSection/>
            <SortFilterSection/>
            <NowPlayingSection/>
        </section>
    );
};

export default LeftSideContainer;