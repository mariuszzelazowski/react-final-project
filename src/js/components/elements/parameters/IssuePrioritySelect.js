import { Select } from '@chakra-ui/react'
import React from "@types/react";

const IssuePrioritySelect = () => {
    return (
        <div className="create-task-priority-box">
            <p className="create-task-priority-title">Priority:</p>
            <Select placeholder='Priority'>
                <option value='critical'>Critical</option>
                <option value='high'>High</option>
                <option value='medium'>Medium</option>
                <option value='low'>Low</option>
            </Select>
        </div>
    );
};

export default IssuePrioritySelect;