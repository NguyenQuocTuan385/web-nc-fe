import "./styles.css";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/reducers/ToDoList/actionTypes";
import { ToDoListService } from "../../../services/todolist"
import { setLoading } from "../../../redux/reducers/Status/actionTypes";

const AddTask = () => {
    const [taskName, setTaskName] = useState('');
    const todolist = useSelector(state => state.todolist);
    const length = todolist.tasks.length;
    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setTaskName(event.target.value);
    };

    const handleAddTask = () => {
        if (taskName.trim().length === 0) {
            alert("Vui lòng nhập ít nhất một ký tự!!");
            return;
        }

        const newTask={
            id: length+1,
            title: taskName,
            completed: false
        };
        
        dispatch(setLoading(true));
        ToDoListService.createTask(newTask)
            .then((res) => {
                dispatch(addTask(res));
                setTaskName(''); 
            })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => {
                dispatch(setLoading(false));
            })
    };

    return ( 
        <div className="add-task">
            <input className="task-name" 
            placeholder="Thêm một công việc" 
            type="text" 
            value={taskName} 
            onChange={handleInputChange} />

            <button onClick={handleAddTask}>Thêm</button>
            
        </div>
     );
}
 
export default AddTask;