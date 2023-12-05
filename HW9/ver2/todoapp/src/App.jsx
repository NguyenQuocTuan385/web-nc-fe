import './App.css';
import React from "react";
import ToDoList from './components/ToDoList/index';
import AppStatus from './components/AppStatus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { useState } from 'react';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className="App">
          <AppStatus />
          <Routes>
            <Route path="/" element={<LoginForm/>}/>
            <Route element={<ProtectedRoute />}>
              <Route path="/todolist" element={<ToDoList />} />
            </Route>
          </Routes>     
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
