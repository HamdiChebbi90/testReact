import React from "react";
import "./style.css";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <header className="banner">
      <h1>BREAKING NEWS</h1>
      <h2>{">"}</h2>
      <Marquee className="marquee">
      WE ARE LIVE!  WE ARE LIVE!  WE ARE LIVE!  WE ARE LIVE!  WE ARE LIVE!</Marquee>
    </header>
  );
};

export default Banner;
