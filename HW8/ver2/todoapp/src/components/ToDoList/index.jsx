import "./styles.css"
import AddTasks from './AddTask';
import ShowTasks from './ShowTasks';
import FilterTasks from './FilterTasks';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTasks } from "../../redux/reducers/Task/actionTypes";

const ToDoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      const listTasks = JSON.parse(localStorage.getItem("tasks"))
      dispatch(setTasks(listTasks));
    }
  }, [])

  return (
    <>
      <h1>Danh sách công việc</h1>
      <div className="handleTask">
        <FilterTasks />
        <AddTasks />
      </div>
      <ShowTasks />
    </>
  );
}

export default ToDoList;