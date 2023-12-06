import './App.css';
import React from "react";
import ToDoList from './components/ToDoList/index';
import LoadingScreen from './components/LoadingScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import ProtectedRoute from './routes/ProtectedRoute';
import { useSelector } from "react-redux";

function App() {
  const status = useSelector((state) => state.status)

  return (
    <BrowserRouter>
      <div className='container'>
        <div className="App">
          {status.isLoading && < LoadingScreen />}
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
