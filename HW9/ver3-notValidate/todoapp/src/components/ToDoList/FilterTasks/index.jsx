import React from 'react'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTask } from "../../../redux/reducers/ToDoList/actionTypes";
import "./styles.css";

const FilterTask = () => {
  const dispatch = useDispatch();
  const [ searchTerm, setSearchTerm ] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    dispatch(filterTask(event.target.value));
  };

  return (
    <div className="filter">
      <h2>Lọc</h2>
      <input type="text" 
      placeholder="Lọc công việc" 
      className="search" 
      onChange={ handleSearchChange } 
      value={ searchTerm }/>
    </div>
  )
}

export default FilterTask;