import { useDispatch, useSelector } from "react-redux";
import { markTask } from "../../../redux/reducers/Task/actionTypes";
import "./styles.css";

const ShowTask = () => {
    
    const dispatch = useDispatch();
    const state = useSelector((state) => state.tasks)
    const tasksShow = state.filteredTasks.length > 0 ? state.filteredTasks : state.tasks;
    const onClickCheckbox = (id) => {
        const newTasks = state.tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
        dispatch(markTask(id))
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
                        onClick={ () => onClickCheckbox(task.id) } />
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default ShowTask;