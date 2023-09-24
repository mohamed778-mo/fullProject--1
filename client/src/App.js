import React, { useState } from 'react'
import PostsPage from './pages/Posts';
import './index';
import Login from './pages/login/Login';
import Register from './pages/login/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './pages/login/Header';
import Successfull from './pages/login/Successfull';
import Please from './components/please';

const App = () => {
  const [valid,setValid]= useState(false);

  return (
    
    <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/posts" element={valid?<PostsPage/>:<Please/>} />
            <Route path="/login" element={<Login valid={valid} setValid={setValid}/>} />
            <Route path="/" element={<Register />} />
            <Route path="/successfull" element={<Successfull />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App