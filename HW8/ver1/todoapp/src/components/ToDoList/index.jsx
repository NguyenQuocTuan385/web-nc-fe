import React, { useEffect } from "react";
import { useState } from "react";
import "./styles.css"
import AddTask from '../AddTask';
import ShowTasks from '../ShowTasks';
import FilterTasks from '../FilterTasks';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("tasks")) {
      const listTasks = JSON.parse(localStorage.getItem("tasks"));
      setTasks(listTasks);
      setFilteredTasks(listTasks);
    }
  }, [])

  const addTask = (taskName) => {
    const length = tasks.length;
    const newTask = {
      id: length + 1,
      title: taskName,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setFilteredTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };

  const handleCompleteCheckboxChange = (taskId) => {
    const newTasks = tasks.map(task => task.id === taskId ? {...task, completed: !task.completed} : task);
    setTasks(newTasks);
    setFilteredTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const handleFilterTask = (searchTerm) => {
    setFilteredTasks(filteredTasks.filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase())));
  }

  return (
    <>
      <h1>Danh sách công việc</h1>
      <div className="handleTask">
        <FilterTasks handleFilterTask={handleFilterTask}/>
        <AddTask addTask={addTask} index={tasks.length}/>
      </div>
      <ShowTasks tasks={filteredTasks} handleCheckboxChange={handleCompleteCheckboxChange}/>
    </>
  );
}

export default ToDoList;