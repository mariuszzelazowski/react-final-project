import SettingsSection from "../sections/SettingsSection";
import SessionInfoSection from "../sections/SessionInfoSection";
import TasksSection from "../elements/TasksSection";

const RightSideContainer = () => {
    return (
        <section className="right-side-container">
            <SettingsSection/>
            <SessionInfoSection/>
            <TasksSection/>
        </section>
    );
};

export default RightSideContainer;