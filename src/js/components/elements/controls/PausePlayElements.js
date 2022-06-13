import React, {useState} from "react";

const PausePlayElements = () => {
    const [playState, setPlayState] = useState(false)

    const handleClick = () => {
        setPlayState(prev => !prev)
    }

    if (playState === false) {
        return <div onClick={handleClick} className="control-bar-icon-play">
            <span className="control-bar-icon-tooltip">
                Resume
            </span>
        </div>
    } else return <div onClick={handleClick} className="control-bar-icon-pause">
        <span className="control-bar-icon-tooltip">
            Pause
        </span>
    </div>
};

export default PausePlayElements;