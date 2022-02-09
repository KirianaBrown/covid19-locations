import React from "react";
import LocationsMenu from "./LocationsMenu";
import LocationsTable from "./LocationsTable";
import classes from "./Locations.module.css";

export default function Locations() {
  return (
    <div className={classes.locations}>
      <LocationsMenu />
      <LocationsTable />
    </div>
  );
}
