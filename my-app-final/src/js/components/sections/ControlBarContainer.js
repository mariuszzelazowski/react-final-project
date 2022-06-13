import FullscreenElements from "../elements/controls/FullscreenElements";
import LiveElement from "../elements/controls/LiveElement";
import NextEpisodeElement from "../elements/controls/NextEpisodeElement";
import PausePlayElements from "../elements/controls/PausePlayElements";
import ProgressBarElements from "../elements/ProgressBarElements";
import SeekForwardElement from "../elements/controls/SeekForwardElement";
import TimerLeftElement from "../elements/TimerLeftElement";
import TimerRightElement from "../elements/TimerRightElement";
import UnmuteMuteElements from "../elements/controls/UnmuteMuteElements";
import SeekBackwardElement from "../elements/controls/SeekBackwardElement";
import React, {useState} from "react";


const ControlBarContainer = () => {
    return (
        <div className="control-bar-section-container">
            <SeekBackwardElement/>
            <PausePlayElements/>
            <SeekForwardElement/>
            <UnmuteMuteElements/>
            <TimerLeftElement/>
            <ProgressBarElements/>
            <TimerRightElement/>
            <LiveElement/>
            <FullscreenElements/>
        </div>
    );
};

export default ControlBarContainer;