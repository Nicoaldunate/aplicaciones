import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import DetallesEjercicio from './pages/DetallesEjercicio';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  return (
    <box width="400px" sx={{width:{xl: '1488px'}}} m="auto"> 
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ejercicio/:id" element={<DetallesEjercicio/>} />
        </Routes>
    <Footer/>

    
        

    </box>
  )
}

export default App