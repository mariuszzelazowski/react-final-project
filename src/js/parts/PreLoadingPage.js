const PreLoadingPage = () => {
    return (
        <div className="pre-loading-page">
            <div className="pre-loading-page-container">
                <div className="pre-loading-page-logo">
                    <div className="pre-loading-page-title">
                        <p className="pre-loading-page-title-first">rePlayer</p>
                        <div className="pre-loading-page-loader">
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <p className="pre-loading-page-title-second">Replayer</p>
                    </div>
                </div>
                <p className="pre-loading-page-title-text">loading...</p>
            </div>
        </div>
    );
};

export default PreLoadingPage;