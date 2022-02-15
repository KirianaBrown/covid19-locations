import React from "react";
import Logo from "../../assets/logo.png";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="logo blue circle" />
        <h1>Covid-19 . New Zealand Locations</h1>
      </div>
      <a href="https://covid19.govt.nz/" className={classes.link}>
        Unite Against Covid-19
      </a>
    </header>
  );
}
