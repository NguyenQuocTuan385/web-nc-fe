import './App.css';
import React from "react";
import ToDoList from './components/ToDoList/index';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import allReducers from "../src/redux/reducers/index";

function App() {
  const store = createStore(allReducers);

  return (
    <Provider store={store}>
      <div className='container'>
      <div className="App">
        <ToDoList />       
      </div>
    </div>
    </Provider>
  );
}

export default App;
