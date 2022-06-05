import SectionTitle from "././SectionTitle";
import TasksButton from "./TasksButton";


const TasksSection = () => {
    return (
        <div className="tasks-list-container">
            <SectionTitle sectionTitle="any problem?"/>
            <TasksButton buttonName="create task"/>
            <TasksButton buttonName="tasks list"/>
        </div>
    )
}

export default TasksSection;