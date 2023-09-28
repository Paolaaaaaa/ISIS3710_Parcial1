import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>

    <BrowserRouter>


        <Routes>
      


        <Route path="/LogIn" element={<Login/>} />
        <Route path="/Home" element={<Home books={[]}/>}/>
        <Route path="/LogIn" element={<Login/>}/>


        </Routes>
        </BrowserRouter>


    

    </div>

  );
}

export default App;
