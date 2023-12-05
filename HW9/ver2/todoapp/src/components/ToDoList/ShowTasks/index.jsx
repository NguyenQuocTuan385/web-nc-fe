import { useDispatch, useSelector } from "react-redux";
import { markTask } from "../../../redux/reducers/ToDoList/actionTypes";
import "./styles.css";
import { ToDoListService } from "../../../services/todolist"
import { setLoading } from "../../../redux/reducers/Status/actionTypes";

const ShowTask = () => {
    const dispatch = useDispatch();
    const todolist = useSelector((state) => state.todolist)
    const tasksShow = todolist.filteredTasks.length > 0 ? todolist.filteredTasks : todolist.tasks;
    const onClickCheckbox = (task) => {
        dispatch(setLoading(true));
        ToDoListService.updateTask(task.id, { ...task, completed: !task.completed })
            .then(() => {
                dispatch(markTask(task.id))
            })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => {
                dispatch(setLoading(false));
            })
    }

    return (
        <div className="showTask">
            <div className="listTask">
                {tasksShow.map((task) => (
                    <div className="task" key={ task.id }>
                        { task.completed ?
                            (<div className="complete" key={ task.id }>
                                <h3>{ task.title }</h3>
                            </div>
                            )
                        :   (<div className="incomplete" key={ task.id }>
                                <h3>{ task.title }</h3>
                            </div>
                            )
                        }

                        <input type="checkbox" 
                        checked={ task.completed } 
                        onChange={ () => onClickCheckbox(task) } />
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default ShowTask;