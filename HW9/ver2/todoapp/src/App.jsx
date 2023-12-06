import './App.css';
import React from "react";
import ToDoList from './components/ToDoList/index';

function App() {
  return (
    <div className='container'>
      <div className="App">
        <ToDoList />   
      </div>
    </div>
  );
}

export default App;
