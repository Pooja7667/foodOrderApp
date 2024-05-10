import React from "react";
 import "./App.css";
import Header from "./componet/Layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./componet/Footer";

function App() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
