import "./styles.css";
import React from "react";
import { useState } from "react";
const AddTask = ( { addTask } ) => {
    const [taskName, setTaskName] = useState('');

    const handleInputChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleAddTask = () => {
        if (taskName.trim().length === 0) {
            alert("Vui lòng nhập ít nhất một ký tự!!");
            return;
        }
        
        addTask(taskName)
        setTaskName('');
    };

    return ( 
        <div className="add-task">
            <input className="task-name"
            placeholder="Thêm một công việc"
            type="text"
            value={taskName}
            onChange={handleInputChange}
            />
            <button onClick={handleAddTask}>Thêm</button>
        </div>
     );
}
 
export default AddTask;