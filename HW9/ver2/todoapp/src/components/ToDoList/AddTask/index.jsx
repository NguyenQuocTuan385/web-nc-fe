import "./styles.css";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/reducers/ToDoList/actionTypes";

const AddTask = () => {
    const [taskName, setTaskName] = useState('');
    const todolist = useSelector(state => state.todolist);
    const dispatch = useDispatch();

    const onSubmit = () => {
        if (taskName.trim().length === 0) {
            alert("Vui lòng nhập ít nhất một ký tự!!");
            return;
        }
        
        const length = todolist.tasks.length;
        
        const newTask = {
            id: length + 1,
            title: taskName,
            completed: false
        };
        
        dispatch(addTask(newTask));
        localStorage.setItem("tasks", JSON.stringify([...todolist.tasks, newTask]));
        setTaskName(''); 
    };

    const handleInputChange = (event) => {
        setTaskName(event.target.value);
    };

    return ( 
        <>
            <form className="form-add-task" onSubmit={onSubmit}>
                <input 
                    className="task-name" 
                    placeholder="Tên công việc" 
                    type="text" 
                    value={taskName} 
                    onChange={handleInputChange}
                />
                <button type="submit">Thêm công việc</button>
            </form>
        </>
     );
}
 
export default AddTask;