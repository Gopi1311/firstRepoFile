import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import TodoList from "./Listtodo";

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/todo-list' element={<TodoList />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
