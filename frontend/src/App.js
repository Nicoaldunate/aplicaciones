import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

//Componentes
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
 

//Paginas
import Home from "./pages/Home";
import ejercicios from "./pages/ejercicios";
import miPerfil from "./pages/perfil";
import crearRutina from "./pages/crearRutinas";
import Pruebas from "./pages/Pruebas";




const App = () => {
  return (
    <Box width="400px">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicios" element={<ejercicios />} />
        <Route path="/miPerfil" element={<miPerfil />} />
        <Route path="/crearRutina/" element={<crearRutina />} />
        <Route path="/pruebas" element={<Pruebas />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
