import React, {useState} from "react";

const LiveElement = () => {
    const [typeMaterialIcon, setTypeMaterialIcon] = useState(true)

    const handleClick = () => {
        setTypeMaterialIcon(prev => !prev)
    }

    if (typeMaterialIcon === true) {
        return <div onClick={handleClick} className="control-bar-icon-live"/>
    } else return <div onClick={handleClick} className="control-bar-icon-next-episode">
         <span className="control-bar-icon-tooltip">
                Next Episode
            </span>
    </div>
};

export default LiveElement;