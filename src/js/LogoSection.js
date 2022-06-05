import logo from  "../images/logo.png"

const LogoSection = () => {
    return (
        <div className="logo-section-container">
            <a href="/">
                <img className="logo-img" src={logo} alt="player logo"/>
                <h1 className="logo-title">
                    <p className="logo-title-first">rePlayer</p>
                    <p className="logo-title-second"> Replayer</p>
                </h1>
            </a>
        </div>
    )
}

export default LogoSection;