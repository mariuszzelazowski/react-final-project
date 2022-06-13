import React, {useState} from "react";
import SectionTitle from "../elements/SectionTitle";

import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";
import Button from 'react-bootstrap/Button'




const CreateTasks = () => {
    const [showCreateTask, setShowCreateTask] = useState(false);
    const handleCloseCreateTask = () => setShowCreateTask(false);
    const handleShowCreateTask = () => setShowCreateTask(true);

    return (
        <div className="create-task-offcanvas-button">
            <Button className="tasks-list-button" variant="primary" onClick={handleShowCreateTask}>
                create task
            </Button>
            <Offcanvas backdrop={false} show={showCreateTask} onHide={handleCloseCreateTask} placement={"bottom"}>
                <div className="create-task-offcanvas">
                    <div className="create-task-offcanvas-container">
                        <OffcanvasHeader closeButton>
                            <OffcanvasTitle>create task</OffcanvasTitle>
                        </OffcanvasHeader>
                        <OffcanvasBody>
                            <div className="create-task-offcanvas-dropdowns">
                                <div className="create-task-env-select-box">
                                </div>
                                <div className="create-task-os-select-box">
                                </div>
                                <div className="create-task-browser-select-box">
                                </div>
                            </div>
                            <div className="create-task-offcanvas-inputs">

                            </div>
                            <div className="create-task-offcanvas-buttons">

                            </div>
                            tu utworzysz zgłoszenie
                        </OffcanvasBody>
                    </div>
                </div>
            </Offcanvas>
        </div>
    );
};

const TasksManager = () => {
    const [showTasksList, setShowTasksList] = useState(false);
    const handleCloseTasksList = () => setShowTasksList(false);
    const handleShowTasksList = () => setShowTasksList(true);

    return (
        <div className="tasks-list-offcanvas-button">
            <Button className="tasks-list-button" variant="primary" onClick={handleShowTasksList}>
                task manager
            </Button>
            <Offcanvas backdrop={false} show={showTasksList} onHide={handleCloseTasksList} placement={"bottom"}>
                <OffcanvasHeader closeButton>
                    <OffcanvasTitle>tasks manager</OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody>
                    To jest task manager
                </OffcanvasBody>
            </Offcanvas>
        </div>
    );
};

const ManageIssuesSection = () => {
    return (
        <div className="tasks-list-container">
            <SectionTitle sectionTitle="any problem?"/>
            <CreateTasks/>
            <TasksManager/>
        </div>
    );
};

export default ManageIssuesSection;