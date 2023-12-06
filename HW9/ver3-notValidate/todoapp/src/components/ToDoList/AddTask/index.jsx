import "./styles.css";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/reducers/ToDoList/actionTypes";
import { ToDoListService } from "../../../services/todolist"

const AddTask = () => {
    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();

    const onSubmit = () => {
        if (taskName.trim().length === 0) {
            alert("Vui lòng nhập ít nhất một ký tự!!");
            return;
        }
         
        const newTask = {
            title: taskName,
            completed: false
        };
        
        ToDoListService.createTask(newTask)
        .then((res) => {
            dispatch(addTask(res));
            setTaskName(''); 
        })
        .catch((e) => {
            console.log(e)
        })
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