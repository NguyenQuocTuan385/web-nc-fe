import "./styles.css"
import AddTasks from './AddTask';
import ShowTasks from './ShowTasks';
import FilterTasks from './FilterTasks';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTasks } from "../../redux/reducers/ToDoList/actionTypes";

const ToDoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      const listTasks = JSON.parse(localStorage.getItem("tasks"))
      dispatch(setTasks(listTasks));
    }
  }, [])

  return (
    <div className="tasks-container">
      <h1>Danh sách công việc</h1>
      <FilterTasks />
      <AddTasks />
      <ShowTasks />
    </div>
  );
}

export default ToDoList;