import React, {useState} from "react";
import {Box} from '@mui/material';



// Componentes

import Ejercicios from "../components/Ejercicios";
import Banner from "../components/Banner";
import BuscarEjercicios from "../components/BuscarEjercicios";


//main


const Home = () => {
  return <Box>
    <Banner/>
    <BuscarEjercicios/>
    <Ejercicios/>

  </Box>;
};

export default Home;
