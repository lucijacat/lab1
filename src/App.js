import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Main from './pages/Main';
import Table from './pages/Table';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/' element={<Main />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/table' element={<Table/>} />
    </Routes>
    </Router>
  );
}

export default App;