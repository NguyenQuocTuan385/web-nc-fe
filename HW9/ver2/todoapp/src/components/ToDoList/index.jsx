import "./styles.css"
import AddTasks from './AddTask';
import ShowTasks from './ShowTasks';
import FilterTasks from './FilterTasks';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTasks } from "../../redux/reducers/ToDoList/actionTypes";
import { setLoading } from "../../redux/reducers/Status/actionTypes";
import { ToDoListService } from "../../services/todolist"

const ToDoList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getTasks = async () => {
      dispatch(setLoading(true))
      ToDoListService.getTasks()
        .then(res => {
          dispatch(setTasks(res))
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          dispatch(setLoading(false))
        })
    }
    getTasks();
  }, [])

  return (
    <div className="tasks-container">
      <h1>Danh sách công việc</h1>
      <div className="handleTask">
        <FilterTasks />
        <AddTasks />
      </div>
      <ShowTasks />
    </div>
  );
}

export default ToDoList;