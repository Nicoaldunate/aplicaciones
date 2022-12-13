import React, {useState} from "react";
import {Box} from '@mui/material';



// Componentes

import Ejercicios from "../components/Ejercicios";
import Banner from "../components/Banner";
import BuscarEjercicios from "../components/BuscarEjercicios";
import TarjetaEjercicio from "../components/TarjetaEjercicio";


//main


const Home = () => {
  return (
    <Box>
      <Banner />
      <BuscarEjercicios />
      <Ejercicios />
      <TarjetaEjercicio />
    </Box>
  );
};

export default Home;
