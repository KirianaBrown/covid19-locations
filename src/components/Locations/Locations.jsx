import React from "react";
import LocationsMenu from "./LocationsMenu";
import LocationsTable from "./LocationsTable";
import classes from "./Locations.module.css";

export default function Locations(props) {
  return (
    <div className={classes.locations}>
      <LocationsMenu />
      <LocationsTable locations={props.locations} />
    </div>
  );
}
