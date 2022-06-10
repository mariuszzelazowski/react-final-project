const SettingsOption = ({option}) => {
    return (
        <>
            <p className="settings-section-option-label">
                {option}
            </p>
        </>
    );
};

const SettingsButton = ({button}) => {
    return (
        <>
            <button className="settings-section-option-button">
                {button}
            </button>
        </>
    );
};

const SettingsOptions = ({options}) => {
    return (
        <>
            {options.map((option, idx) => (
                <div className="settings-section-option-box">
                    <SettingsOption option={option.label} key={idx}/>
                    <SettingsButton button={option.buttonName}/>
                </div>
            ))}
        </>
    );
};

export default SettingsOptions