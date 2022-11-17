import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

//assets

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: {
          sm: "32px",
          xs: "20px",
        },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link>
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        spacing={2}
        gap={40}
        fontSize="24px"
        alignContent="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2325",
          }}
        >
          Home
        </Link>
        <a
          href="#ejercicios"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Ejercicios
        </a>
        <Link
          to="/crear-rutina"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >Create tu rutina
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
