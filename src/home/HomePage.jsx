import React from "react";
import "./style.css";
import logo from "../assets/images/logo.png";
import right from "../assets/images/right.png";
import Stack from "../components/stack/stack";
import bg from "../assets/images/bg.png";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page">
        <img src={bg} className="bg" alt="bg" />
        <img src={logo} className="logo" alt="logo" />
        <img src={right} className="right" alt="right" />
        <Stack />
      </div>
      <div className=" rotated-text">
        <h1 className="firstline">We are one people but we live as if </h1>
        <h1 className="secondline">Divided … everything is connected</h1>
      </div>
    </div>
  );
};

export default HomePage;
