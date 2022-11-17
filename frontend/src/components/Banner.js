import React from 'react'
import {Box, Stack, Typography , Button} from '@mui/material'; 
import Bannerimg from '../assets/images/banner.png'

const Banner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "150px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="100px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Gimansio ULS
      </Typography>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: {
            lg: "44px",
            xs: "40px",
          },
        }}
      >
        Cuerpo Sano Menta Sana
      </Typography>
      <Typography fontSize={"22px"} lineHeight="35px" mb={2}>
        Revisa los mejores ejercicios disponibles en el gimnasio
      </Typography>
      <img src={Bannerimg} alt="banner" className="hero-banner-img" />
      <Button variant="contained" color="error" href="#ejercicios">
        Ver Ejercicios
      </Button>
      <img src={Bannerimg} alt="banner" className="hero-banner-img" />
    </Box>
  );
}

export default Banner