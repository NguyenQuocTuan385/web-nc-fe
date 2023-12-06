import "./styles.css";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTask } from "../../../redux/reducers/ToDoList/actionTypes";
import { ToDoListService } from "../../../services/todolist"
import { setLoading } from "../../../redux/reducers/Status/actionTypes";
import { useForm } from "react-hook-form";

const AddTask = () => {
    const { register, handleSubmit, formState: {errors} } = useForm ({
        defaultValues: {
            taskName: "",
        }
      });
    const todolist = useSelector(state => state.todolist);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        const length = todolist.tasks.length;
        
        const newTask = {
            id: length + 1,
            title: data.taskName,
            completed: false
        };
        
        dispatch(setLoading(true));
        ToDoListService.createTask(newTask)
            .then((res) => {
                dispatch(addTask(res));
            })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => {
                dispatch(setLoading(false));
            })
    };

    return ( 
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form-add-task">
                <input 
                    className="task-name" 
                    placeholder="Tên công việc" 
                    type="text" 
                    {...register("taskName", {
                        required: "Task name is required" ,
                    })}
                />
                <button type="submit">Thêm công việc</button>
            </form>
            <p className='error'>{errors.taskName?.message}</p>
        </>
     );
}
 
export default AddTask;