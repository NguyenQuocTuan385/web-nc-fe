import "./styles.css"
import AddTasks from './AddTask';
import ShowTasks from './ShowTasks';
import FilterTasks from './FilterTasks';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTasks } from "../../redux/reducers/ToDoList/actionTypes";
import { ToDoListService } from "../../services/todolist";
import { setLoading } from "../../redux/reducers/Status/actionTypes";

const ToDoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true))
    const getTasks = async () => {
      ToDoListService.getTasks()
        .then(res => {
          dispatch(setTasks(res))
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          setTimeout(() => dispatch(setLoading(false)), 500)
        })
    }
    getTasks();
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