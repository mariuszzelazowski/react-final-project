
const SessionInfoParameter = ({name}) => {
    return (
      <>
          <p className="session-info-parameter-title">
              {name}
          </p>
      </>
    )
}

const SessionInfoValue = ({value}) => {
    return (
        <>
        <p className="session-info-parameter-value">
            {value}
        </p>
        </>
    )
}


const SessionInfoParameters = ({parameters}) => {
    return (
        <>
            {parameters.map((parameter, idx) => (
                <div className="session-info-section-box">
                    <SessionInfoParameter name={parameter.name} key={idx}/>
                    <SessionInfoValue value={parameter.value}/>
                </div>
            ))}
        </>
    )
}

export default SessionInfoParameters;