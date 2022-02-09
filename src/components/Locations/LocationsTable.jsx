import React from "react";
import classes from "./LocationsTable.module.css";

export default function LocationsTable() {
  return (
    <div className={classes.locationsTable}>
      <p>Table</p>
      <div className={classes.pagination}>Pagination</div>
    </div>
  );
}
