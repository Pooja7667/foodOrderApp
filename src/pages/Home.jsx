import React from "react";
import "../style/Home.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="mainbox">
        <div className="box6">
          <h1>Food Website</h1>
          <h4>Best Food in india</h4>
          <div className="link-box">
            <NavLink to="manu">Manu</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
