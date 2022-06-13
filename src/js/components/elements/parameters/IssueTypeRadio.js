import React, {useState} from "react";
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'

const IssueTypeRadio = () => {
    const [value, setValue] = useState('1')
    return (
        <div className="create-task-type-box">
            <p className="create-task-type-title">Type:</p>
            <RadioGroup onChange={setValue} value={value}>
                <Stack direction='column'>
                    <Radio value='1'>Bug</Radio>
                    <Radio value='2'>Task</Radio>
                </Stack>
            </RadioGroup>
        </div>
    );
};

export default IssueTypeRadio;
