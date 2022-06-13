import React from 'react';
import VideoContainer from "../sections/VideoContainer";
import ControlBarContainer from "../sections/ControlBarContainer";
import VideoListContainer from "../sections/VideoListContainer";

const MiddleSideContainer = () => {
    return (
        <>
            <section className="middle-side-container">
                <VideoContainer/>
                <ControlBarContainer/>
                <VideoListContainer/>
            </section>
        </>
    );
};

export default MiddleSideContainer;