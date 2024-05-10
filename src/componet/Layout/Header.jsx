import React from "react";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { AppBar, Box, Typography, Toolbar, IconButton, Drawer, Divider,} from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../style/Header.css";

import DehazeIcon from "@mui/icons-material/Dehaze";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // for  manu click
  const sideBarToggle = () => {
    setMobileOpen((!mobileOpen ));
  };

  // for side bar
  const sidebar = (
    <Box
      className="pooja"
      onClick={sideBarToggle}
      sx={{ textAlign: "center", width: "50%" }}
    >
      <Typography
        sx={{ color: "goldenrod", flexGrow: "1" }}
        variant="h6"
        component={"div"}
      >
        <FastfoodIcon />
        Restrunt
      </Typography>
      <Divider />
      <ul className="navM" sx={{ display: "flex" }}>
        <li>
          <NavLink to="Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="About">About </NavLink>
        </li>
        <li>
          <NavLink to="manu">Manu</NavLink>
        </li>
        <li>
          <NavLink to="contect">Contect </NavLink>
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar sx={{ bgcolor: "black", position: "sticky" }} component={"nav"}>
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              sx={{ display: { xs: "block", sm: "none" }, mr: 2 }}
              onClick={sideBarToggle}
            >
              <DehazeIcon sx={{ color: "goldenrod" }} />
            </IconButton>
            <Typography
              sx={{ color: "goldenrod", flexGrow: "1" }}
              variant="h6"
              component={"div"}
            >
              <FastfoodIcon />
              Restrunt
            </Typography>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="nav" sx={{ display: "flex" }}>
                <li>
                  <NavLink to="Home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="About">About </NavLink>
                </li>
                <li>
                  <NavLink to="manu">Manu</NavLink>
                </li>
                <li>
                  <NavLink to="contect">Contect </NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        {/* for side bar  phone*/}
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={sideBarToggle}
            SX={{ display: { sx: "block", sm: "none" } }}
          >
            {sidebar}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
