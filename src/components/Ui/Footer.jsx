import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ApiIcon from "@mui/icons-material/Api";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerTopRow}>
        <div>
          <p>Data source: Minstry of Health</p>
          <p>All efforts are made to ensure data is kept up to date</p>
        </div>
        <ul>
          <li>
            <a href="https://www.health.govt.nz/covid-19-novel-coronavirus/covid-19-data-and-statistics/covid-19-current-cases">
              Ministry of Health
            </a>
          </li>
          <li>
            <a href="https://covid19.govt.nz/">Covid-19 GOVT</a>
          </li>
        </ul>
      </div>
      <hr></hr>
      <div className={classes.footerBottomRow}>
        <p>&copy; 2022 BROWN</p>
        <div>
          <a href="https://github.com/KirianaBrown/covid19-locations">
            <GitHubIcon />
          </a>
          <a href="https://github.com/minhealthnz/nz-covid-data/tree/main/locations-of-interest">
            <ApiIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
