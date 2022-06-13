import React from 'react';
const NowPlayingSection = () => {
    return (
        <div className="now-playing-section-container">
            <div className="now-playing-section-body">
                <div className="now-playing-text-box">
                    <p className="now-playing-title">
                        NOW PLAYING: <span className="now-playing-title-value">Title...</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NowPlayingSection;
