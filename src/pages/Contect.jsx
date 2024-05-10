import React from "react";
import "../style/Contect.css";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/material";

const Contect = () => {
  return (
    <>
      <div className="Box5">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          iste ullam veritatis consectetur, commodi illum? Incidunt, perferendis
          itaque sequi eaque illum quia odit sit, at esse corporis in quasi
          reiciendis? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Et aliquam quas nobis iure nesciunt, blanditiis illum enim deserunt
          ipsam in nihil pariatur, corporis magnam tempore molestiae qui
          consequuntur, voluptatum temporibus! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Magni sapiente eius minima qui nostrum!
          Esse minima, error libero facere sequi fugit dolores quaerat ipsam quo
          nobis? Temporibus magnam molestiae vel. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem aut voluptatibus facere deleniti
          a magnam quo, harum assumenda blanditiis debitis culpa veritatis
          error, corporis incidunt explicabo autem! Voluptates, necessitatibus
          deleniti. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Tempore nobis deserunt delectus assumenda rerum dolorum. Molestias
          voluptas aspernatur est incidunt veritatis quam odit doloribus, soluta
          perferendis? Ipsa ad distinctio temporibus? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Similique iste ullam veritatis
          consectetur, commodi illum? Incidunt, perferendis itaque sequi eaque
          illum quia odit sit, at esse corporis in quasi reiciendis? Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Et aliquam quas
          nobis iure nesciunt, blanditiis illum enim deserunt ipsam in nihil
          pariatur, corporis magnam tempore molestiae qui consequuntur,
          voluptatum temporibus! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Magni sapiente eius minima qui nostrum! Esse minima,
          error libero facere sequi fugit dolores quaerat ipsam quo nobis?
          Temporibus magnam molestiae vel. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem aut voluptatibus facere deleniti
          a magnam quo, harum assumenda blanditiis debitis culpa veritatis
          error, corporis incidunt explicabo autem! Voluptates, necessitatibus
          deleniti. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Tempore nobis deserunt delectus assumenda rerum dolorum. Molestias
          voluptas aspernatur est incidunt veritatis quam odit doloribus, soluta
          perferendis? Ipsa ad distinctio temporibus? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Similique iste ullam veritatis
          consectetur, commodi illum? Incidunt, perferendis itaque sequi eaque
          illum quia odit sit, at esse corporis in quasi reiciendis? Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Et aliquam quas
          nobis iure nesciunt, blanditiis illum enim deserunt ipsam in nihil
          pariatur, corporis magnam tempore molestiae qui consequuntur,
          voluptatum temporibus! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Magni sapiente eius minima qui nostrum! Esse minima,
          error libero facere sequi fugit dolores quaerat ipsam quo nobis?
          Temporibus magnam molestiae vel. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolorem aut voluptatibus facere deleniti
          a magnam quo, harum assumenda blanditiis debitis culpa veritatis
          error, corporis incidunt explicabo autem! Voluptates, necessitatibus
          deleniti. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          
          
        </p>

        <Box style={{ display: " flex", justifyContent: "center" }}>
          <ul>
            <li
              style={{
                color: "white",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Contact Details
            </li>
            <li style={{ color: "black" }}>
              <SupportAgentIcon sx={{ color: "green" }} />
              1800-00-0000(tollfree)
            </li>
            <hr></hr>
            <li style={{ color: "black" }}>
              <MailIcon sx={{ color: "blue" }} />
              help@gmail.com
            </li>
            <hr></hr>
            <li style={{ color: "black" }}>
              <AddIcCallIcon sx={{ color: "red" }} /> 918241526
            </li>
            <hr></hr>
          </ul>
        </Box>
      </div>
    </>
  );
};

export default Contect;
