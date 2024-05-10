import React from "react";
import "../style/manu.css";
import DataList from "../Data/Data.js";
import { Card,CardActionArea, CardMedia, Typography, Box ,CardContent,
  Button,
} from "@mui/material";
const Manu = () => {
  console.log(DataList);

  return (
    <>
      <div
        className="box3"
       
      >
        {DataList.map((Data) => {
          console.log(Data.dis);
          return (
            <Box>
              <Card sx={{ width: "20rem", mt: "2rem", ml: "2rem" }}>
                <CardActionArea>
                  <CardMedia
                    component={"img"}
                    sx={{
                      height: "15rem",
                    }}
                    src={Data.poto}
                  />
                  <CardContent sx={{ height: "8rem" }}>
                    <Typography variant="h4">{Data.Title}</Typography>
                    <p>{Data.dis}</p>
                    <h4>{Data.price} Rs</h4>
                    <Button variant="contained" sx={{ mb: "1rem" }}>
                      Add
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          );
        })}
      </div>
    </>
  );
};

export default Manu;
