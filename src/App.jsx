import React,{useState} from 'react'
import './App.css';
import SignUp  from "./pages/SignIn";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {Routes, Route} from 'react-router-dom'

function App() {
  return(
    <div>
      <Routes>
        <Route path='/' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App
