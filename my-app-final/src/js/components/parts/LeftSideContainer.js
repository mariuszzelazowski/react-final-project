import React from 'react';
import LogoSection from "../sections/LogoSection";
import NowPlayingSection from "../sections/NowPlayingSection";
import SortFilterSection from "../sections/SortFilterSection";
import SearchSection from "../sections/SearchSection";


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