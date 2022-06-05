import SectionTitle from "././SectionTitle";
import SessionInfoParameters from "././SessionInfoParameters";

const SessionInfoSection = () => {
    const parameters = [
        {
            id: 1,
            name: "Stream Time:",
            value: "11.811"
        },
        {
            id: 2,
            name: "OS:",
            value: "Windows"
        },
        {
            id: 3,
            name: "Browser:",
            value: "Chrome"
        },
        {
            id: 4,
            name: "App Version:",
            value: "1.0"
        }
    ];
    return (
        <div className="session-info-section-container">
            <SectionTitle sectionTitle="session info"/>
            <SessionInfoParameters parameters={parameters} key={parameters.id}/>
        </div>
    )
}

export default SessionInfoSection;