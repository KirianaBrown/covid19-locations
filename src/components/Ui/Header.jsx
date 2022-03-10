import React from "react";
import { useSelector } from "react-redux";
import Logo from "../../assets/logo.png";
import classes from "./Header.module.css";

export default function Header() {
  const allLocations = useSelector((state) => state.locations.locations);

  const latestPublishedDate = allLocations.reduce((a, b) =>
    a.publishedAt > b.publishedAt ? a : b
  );

  return (
    <header>
      <div>
        <img src={Logo} alt="logo blue circle" />
        <h1>Covid-19 . New Zealand Locations</h1>
      </div>
      <p>
        Last Updated:
        {new Date(latestPublishedDate.publishedAt).toString()}
      </p>
      <a href="https://covid19.govt.nz/" className={classes.link}>
        Unite Against Covid-19
      </a>
    </header>
  );
}
