import React from 'react'
import { useState } from "react";
import "./styles.css";

export default function FilterTask( { handleFilterTask } ) {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    handleFilterTask(event.target.value);
  };

  return (
    <div className="filter">
      <h2>Lọc</h2>
    <input type="text"
    placeholder="Tìm kiếm công việc"
    className="search"
    onChange={handleSearchChange}
    value={searchTerm}
    />
    </div>
  )
}
