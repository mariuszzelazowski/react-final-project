import React, {useState} from "react";

const UnmuteMuteElements = () => {
    const [volumeState, setVolumeState] = useState(true)

    const handleClick = () => {
        setVolumeState(prev => !prev)
    }

    if (volumeState === true) {
        return <div onClick={handleClick} className="control-bar-icon-unmute">
                  <span className="control-bar-icon-tooltip">
               Mute
            </span>
        </div>
    } else return <div onClick={handleClick} className="control-bar-icon-muted">
              <span className="control-bar-icon-tooltip">
                Unmute
            </span>
    </div>
};

export default UnmuteMuteElements;