import FullscreenElements from "../elements/FullscreenElements";
import LiveElement from "../elements/LiveElement";
import NextEpisodeElement from "../elements/NextEpisodeElement";
import PausePlayElements from "../elements/PausePlayElements";
import ProgressBarElements from "../elements/ProgressBarElements";
import SeekForwardElement from "../elements/SeekForwardElement";
import TimerLeftElement from "../elements/TimerLeftElement";
import TimerRightElement from "../elements/TimerRightElement";
import UnmuteMuteElements from "../elements/UnmuteMuteElements";
import SeekBackwardElement from "../elements/SeekBackwardElement";

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
            <NextEpisodeElement/>
            <LiveElement/>
            <FullscreenElements/>
        </div>
    );
};

export default ControlBarContainer;