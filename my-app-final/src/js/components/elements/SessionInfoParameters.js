import React from 'react';
const SessionInfoParameter = ({name}) => {
    return (
        <>
            <p className="session-info-parameter-title">
                {name}
            </p>
        </>
    );
};

const SessionInfoValue = ({value}) => {
    return (
        <>
            <p className="session-info-parameter-value">
                {value}
            </p>
        </>
    );
};


const SessionInfoParameters = ({parameters}) => {
    return (
        <>
            {parameters.map((parameter, idx) => (
                <div key={idx} className="session-info-section-box">
                    <SessionInfoParameter name={parameter.name} />
                    <SessionInfoValue value={parameter.value}/>
                </div>
            ))}
        </>
    );
};

export default SessionInfoParameters;