import React from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <h1>Covid-19. New Zealand Locations</h1>
      <a href="https://covid19.govt.nz/" className={classes.link}>
        Unite Against Covid-19
      </a>
    </header>
  );
}
