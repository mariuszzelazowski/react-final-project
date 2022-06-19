import React, {useEffect, useState} from "react";
import SectionTitle from "../elements/SectionTitle";

import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";
import Button from 'react-bootstrap/Button'
import {Modal} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

export const API = "http://localhost:3005/issueList";

const CreateTasks = ({onAdd}) => {
    const [showCreateTask, setShowCreateTask] = useState(false);
    const handleCloseCreateTask = () => setShowCreateTask(false);
    const handleShowCreateTask = () => setShowCreateTask(true);

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const [values, setValues] = useState({
        ticketId: "",
        ticketType: "",
        ticketPriority: "",
        ticketEnv: "",
        ticketOS: "",
        ticketBrowser: "",
        ticketTitle: "",
        ticketDescription: "",
        ticketStatus: "New",
        ticketCreateDate: "",
        ticketEndDate: ""
    })

    const handleChange = ({ name, value}) => {
        setValues(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const serializeData = ({ticketType, ticketPriority, ticketEnv, ticketOS, ticketBrowser, ticketTitle, ticketDescription, ticketStatus}) => ({
            ticketType,
            ticketPriority,
            ticketEnv,
            ticketOS,
            ticketBrowser,
            ticketTitle,
            ticketDescription,
            ticketStatus,
        }
    )

    const handleSubmit = e => {
        e.preventDefault(values)
        onAdd(serializeData(values))
    }

    return (
        <div className="create-task-offcanvas-button">
            <Button className="tasks-list-button" variant="primary" onClick={handleShowCreateTask}>
                create ticket
            </Button>
            <Offcanvas backdrop={false} show={showCreateTask} onHide={handleCloseCreateTask}
                       placement={"bottom"}>
                <div className="create-task-offcanvas">
                    <div className="create-task-offcanvas-container">
                        <OffcanvasHeader className="create-task-offcanvas-header" closeButton>
                            <OffcanvasTitle
                                className="create-task-offcanvas-header-title">create ticket</OffcanvasTitle>
                        </OffcanvasHeader>
                        <OffcanvasBody>
                            <form className="create-task-form" onSubmit={handleSubmit}>
                                <div className="create-task-offcanvas-dropdowns">
                                    <div className="create-task-type-box">
                                        <label className="create-task-box-title">Type:</label>
                                        <select className="create-task-box-select-box-title"
                                                id="ticketType"
                                                name="ticketType"
                                                form="ticketType"
                                                value={values.ticketType}
                                                onChange={handleChange}>
                                            <option  className="create-task-box-option-text">Bug</option>
                                            <option  className="create-task-box-option-text">Task</option>
                                        </select>
                                    </div>
                                    <div className="create-task-priority-box">
                                        <label className="create-task-box-title">Priority:</label>
                                        <select className="create-task-box-select-box-title"
                                                id="ticketPriority"
                                                name="ticketPriority"
                                                form="ticketPriority"
                                                value={values.ticketPriority}
                                                onChange={handleChange}>
                                            <option className="create-task-box-option-text">Critical</option>
                                            <option className="create-task-box-option-text">High</option>
                                            <option className="create-task-box-option-text">Medium</option>
                                            <option className="create-task-box-option-text">Normal</option>
                                            <option className="create-task-box-option-text">Low</option>
                                        </select>
                                    </div>
                                    <div className="create-task-env-box">
                                        <label className="create-task-box-title">Environment:</label>
                                        <select className="create-task-box-select-box-title"
                                                id="ticketEnv"
                                                name="ticketEnv"
                                                form="ticketEnv"
                                                value={values.ticketEnv}
                                                onChange={handleChange}>
                                            <option className="create-task-box-option-text">Stage</option>
                                            <option  className="create-task-box-option-text">Prod</option>
                                            <option className="create-task-box-option-text">Prev</option>
                                        </select>
                                    </div>
                                    <div className="create-task-os-box">
                                        <label className="create-task-box-title">OS:</label>
                                        <select className="create-task-box-select-box-title" id="ticketOS"
                                                name="ticketOS"
                                                form="ticketOS"
                                                value={values.ticketOS}
                                                onChange={handleChange}>
                                            <option className="create-task-box-option-text">Windows</option>
                                            <option className="create-task-box-option-text">Linux</option>
                                            <option  className="create-task-box-option-text">macOS</option>
                                        </select>
                                    </div>
                                    <div className="create-task-browser-box">
                                        <label className="create-task-box-title">Browser:</label>
                                        <select className="create-task-box-select-box-title" id="ticketBrowser"
                                                name="ticketBrowser" form="ticketBrowser" value={values.ticketBrowser} onChange={handleChange}>
                                            <option  className="create-task-box-option-text">Chrome</option>
                                            <option  className="create-task-box-option-text">Firefox</option>
                                            <option className="create-task-box-option-text">Opera</option>
                                            <option  className="create-task-box-option-text">Edge</option>
                                            <option  className="create-task-box-option-text">Safari</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="create-task-offcanvas-inputs">
                                    <div className="create-task-title-box">
                                        <label className="create-task-box-title">Title:</label>
                                        <input  className="create-task-box-input"
                                               placeholder="Type ticket title..."
                                               value={values.ticketTitle} onChange={handleChange} type="text" id="ticketTitle"
                                               name="ticketTitle"/>
                                    </div>
                                    <div className="create-task-description-box">
                                        <label className="create-task-box-title" htmlFor="">Description:</label>
                                        <textarea className="create-task-box-textarea"
                                                  value={values.ticketDescription}
                                                  onChange={handleChange}
                                                  placeholder="Type ticket description..." id="ticketDescription"
                                                  name="ticketDescription"/>
                                    </div>
                                </div>
                                <div className="create-task-offcanvas-buttons">
                                    <h3 className="create-task-offcanvas-buttons-header">actions:</h3>
                                    <div className="create-task-create-button-box">
                                        <Button
                                            className="create-task-offcanvas-create-button" variant="primary"
                                            onClick={handleShowModal}>
                                            create ticket
                                        </Button>
                                        <Modal className="create-task-modal-element" show={showModal}
                                               onHide={handleCloseModal} animation={true}>
                                            <Modal.Header className="create-task-modal-header" closeButton>
                                                <Modal.Title className="create-task-modal-header-title">create
                                                    ticket</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body className="create-task-modal-body-text">Do you want to create a
                                                ticket?</Modal.Body>
                                            <Modal.Footer className="create-task-modal-footer">
                                                <Button className="create-task-modal-button-back" variant="secondary"
                                                        onClick={handleCloseModal}>
                                                    back
                                                </Button>
                                                <Button className="create-task-modal-button-create"
                                                        variant="primary"
                                                        onClick={handleCloseModal}
                                                        type="submit">
                                                    create
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </div>
                                    <p className="create-task-offcanvas-text">
                                        or check
                                    </p>
                                    <div className="create-task-ticket-list-button-box">
                                        <TasksManager/>
                                    </div>
                                </div>
                            </form>
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

    const [issue, setIssue] = useState([]);

    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setIssue(data))
            .then(data => console.log(data))
            .catch(err => console.warn(err))
    }, [])

    const handleAdd = data => {
        fetch(API, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(r => r.json())
            .then(issue => setIssue(prev => ([
                ...prev,
                issue
            ])))
            .catch(err => console.warn(err))
    }

    return (
        <>
            <CreateTasks onAdd={handleAdd}/>
            <div className="tasks-list-offcanvas-button">
                <Button className="tasks-list-button" variant="primary" onClick={handleShowTasksList}>
                    ticket manager
                </Button>
                <Offcanvas backdrop={false} show={showTasksList} onHide={handleCloseTasksList} placement={"bottom"}>
                    <div className="tasks-manager-offcanvas">
                        <div className="tasks-manager-offcanvas-container">
                            <OffcanvasHeader className="tasks-manager-offcanvas-header" closeButton>
                                <OffcanvasTitle className="tasks-manager-offcanvas-header-title">tickets
                                    manager</OffcanvasTitle>
                            </OffcanvasHeader>
                            <OffcanvasBody className="tasks-manager-offcanvas-body">
                                <>
                                    {issue?.map(el => (
                                        <Accordion key={el.ticketId} className="tasks-manager-issue-list-box">
                                            <Accordion.Item
                                                            className="tasks-manager-issue-list-element" eventKey="0">
                                                <Accordion.Header
                                                    className="tasks-manager-issue-list-element-header">{el.ticketId} {el.ticketTitle}</Accordion.Header>
                                                <Accordion.Body className="tasks-manager-issue-list-element-body">
                                                    <div className="tasks-manager-issue-parameters-box">
                                                        <div className="tasks-manager-issue-parameters-el-box">
                                                            <p className="tasks-manager-issue-parameters-el-name">type:</p>
                                                            <p className="tasks-manager-issue-parameters-el-value">{el.ticketType}</p>
                                                        </div>
                                                        <div className="tasks-manager-issue-parameters-el-box">
                                                            <p className="tasks-manager-issue-parameters-el-name">priority:</p>
                                                            <p className="tasks-manager-issue-parameters-el-value">{el.ticketPriority}</p>
                                                        </div>
                                                        <div className="tasks-manager-issue-parameters-el-box">
                                                            <p className="tasks-manager-issue-parameters-el-name">environment:</p>
                                                            <p className="tasks-manager-issue-parameters-el-value">{el.ticketEnv}</p>
                                                        </div>
                                                        <div className="tasks-manager-issue-parameters-el-box">
                                                            <p className="tasks-manager-issue-parameters-el-name">os:</p>
                                                            <p className="tasks-manager-issue-parameters-el-value">{el.ticketOS}</p>
                                                        </div>
                                                        <div className="tasks-manager-issue-parameters-el-box">
                                                            <p className="tasks-manager-issue-parameters-el-name">browser:</p>
                                                            <p className="tasks-manager-issue-parameters-el-value">{el.ticketBrowser}</p>
                                                        </div>
                                                    </div>
                                                    <div className="tasks-manager-issue-description-box">
                                                        <p className="tasks-manager-issue-description-el-name">description:</p>
                                                        <p className="tasks-manager-issue-parameters-el-value">{el.ticketDescription}</p>
                                                    </div>
                                                    <div className="tasks-manager-issue-status-box">
                                                        <div className="tasks-manager-issue-status-el-box">
                                                            <p className="tasks-manager-issue-status-el-name">status:</p>
                                                            <p className="tasks-manager-issue-status-el-value">{el.ticketStatus.toUpperCase()}</p>
                                                        </div>
                                                        <div className="tasks-manager-issue-status-el-box">
                                                            <p className="tasks-manager-issue-status-el-name">create
                                                                date:</p>
                                                            <p className="tasks-manager-issue-status-el-value">{el.ticketCreateDate}</p>
                                                        </div>
                                                        <div className="tasks-manager-issue-status-el-box">
                                                            <p className="tasks-manager-issue-status-el-name">end
                                                                date:</p>
                                                            <p className="tasks-manager-issue-status-el-value">{el.ticketEndDate}</p>
                                                        </div>
                                                    </div>
                                                    <div className="tasks-manager-issue-action-box">
                                                        <label className="tasks-manager-issue-action-header" htmlFor="">change
                                                            status:</label>
                                                        <select className="tasks-manager-issue-action-title" id="status"
                                                                name="statusList" form="statusForm">
                                                            <option className="tasks-manager-issue-action-option">in
                                                                progress
                                                            </option>
                                                            <option className="tasks-manager-issue-action-option">new
                                                            </option>
                                                            <option className="tasks-manager-issue-action-option">reject
                                                            </option>
                                                            <option className="tasks-manager-issue-action-option">done
                                                            </option>
                                                            <option className="tasks-manager-issue-action-option">in
                                                                test
                                                            </option>
                                                        </select>
                                                        <button className="tasks-manager-issue-action-button"> Submit
                                                        </button>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    ))}
                                </>
                            </OffcanvasBody>
                        </div>
                    </div>
                </Offcanvas>
            </div>
        </>
    );
};

const ManageIssuesSection = () => {
        return (
            <div className="tasks-list-container">
                <SectionTitle sectionTitle="any problem?"/>
                <TasksManager/>
            </div>
        );
    }
;

export default ManageIssuesSection;