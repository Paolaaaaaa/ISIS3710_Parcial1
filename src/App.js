import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';



function App() {



    const [data, setData] = useState([]); // Inicializa el estado con un arreglo vacío

        useEffect(() => {
            fetch("https://raw.githubusercontent.com/Paolaaaaaa/ISIS3710_Parcial1/master/Assets/datos.json")
            .then((response) => response.json())
            .then((data) => {
                setData(data); // Actualiza el estado con los datos obtenidos
            });
        }, []);
  return (
    <div>

    <BrowserRouter>


        <Routes>
      


        <Route path="/LogIn" element={<Login/>} />
        <Route path="/Home" element={<Home books={data}/>}/>
        <Route path="/LogIn" element={<Login/>}/>


        </Routes>
        </BrowserRouter>


    

    </div>

  );
}

export default App;
