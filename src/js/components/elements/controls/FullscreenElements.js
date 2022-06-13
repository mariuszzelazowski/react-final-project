import React, {useState} from "react";

const FullscreenElements = () => {
    const [fullscreenState, setFullscreenState] = useState(false)

    const handleClick = () => {
        setFullscreenState(prev => !prev)
    }

    if (fullscreenState === false) {
        return <div onClick={handleClick} className="control-bar-icon-fs-turn-on">
                  <span className="control-bar-icon-tooltip">
                Turn on Fullscreen
            </span>
        </div>
    } else return <div onClick={handleClick} className="control-bar-icon-fs-turn-off">
         <span className="control-bar-icon-tooltip">
                Turn off Fullscreen
            </span>
    </div>
};

export default FullscreenElements;