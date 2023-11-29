import "./styles.css";


const ShowTask = ({ tasks, handleCheckboxChange }) => {

    return (
        <div className="showTask">
            <div className="listTask">
                {tasks.map((task, id) => (
                    <div className="task" key={id}>
                        { task.completed ? 
                            (
                                <div className="complete">
                                <h3>{task.title}</h3>
                                </div>
                            )
                        : 
                            (
                                <div className="incomplete">
                                <h3>{task.title}</h3>
                                </div>
                            )
                        }
                        
                        <input type="checkbox"
                        className="completed"
                        checked={task.completed}
                        onClick={() => handleCheckboxChange(task.id)}
                        />
                    </div>   
                ))}
            </div>
        </div>
    );
}
 
export default ShowTask;