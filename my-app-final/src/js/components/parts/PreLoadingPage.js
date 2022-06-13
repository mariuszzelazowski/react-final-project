import React from 'react';

const PreLoadingPage = () => {
    return (
            <div className="pre-loading-page-container">
                <div className="pre-loading-page-logo">
                    <div className="pre-loading-page-title">
                        <p className="pre-loading-page-title-first">rePlayer</p>
                        <div className="pre-loading-page-loader">
                            <span className="pre-loading-page-loader-part"/>
                            <span className="pre-loading-page-loader-part"/>
                            <span className="pre-loading-page-loader-part"/>
                            <span className="pre-loading-page-loader-part"/>
                            <span className="pre-loading-page-loader-part"/>
                            <span className="pre-loading-page-loader-part"/>
                        </div>
                        <p className="pre-loading-page-title-second">Replayer</p>
                    </div>
                </div>
                <p className="pre-loading-page-title-text">loading...</p>
            </div>
    );
};

export default PreLoadingPage;