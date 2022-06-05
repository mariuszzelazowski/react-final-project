import LogoSection from "././LogoSection";
import SortFilterSection from "././SortFilterSection";
import SearchSection from "././SearchSection";
import NowPlayingSection from "././NowPlayingSection";

const LeftSideContainer = () => {
    return (
        <section className="left-side-container">
            <LogoSection/>
            <SearchSection/>
            <SortFilterSection/>
            <NowPlayingSection/>
        </section>
    )
};

export default LeftSideContainer;