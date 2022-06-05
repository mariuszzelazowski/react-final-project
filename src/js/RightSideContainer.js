import SettingsSection from "././SettingsSection";
import SessionInfoSection from "././SessionInfoSection";
import TasksSection from "././TasksSection";

const RightSideContainer = () => {
    return (
        <section className="right-side-container">
            <SettingsSection/>
            <SessionInfoSection/>
            <TasksSection/>
        </section>
    )
};

export default RightSideContainer;