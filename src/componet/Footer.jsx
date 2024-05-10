import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <Box sx={{ background: "black", color: "white", textAlign: "center", padding:"1rem" ,fontSize: "5rem"}}>
        <Box sx={{
          justifyContent: "center", display: "flex", cursor: "pointer", fontSize:"20px"
        }}>
          <LinkedInIcon/>
          <GitHubIcon/>
          <YouTubeIcon/>
        </Box>

        <Typography variant="h6">
          @ Powered by pooja
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
