import React from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <h1>Covid-19. New Zealand Locations</h1>
      <a href="www.google/com" className={classes.link}>
        Link
      </a>
    </header>
  );
}
