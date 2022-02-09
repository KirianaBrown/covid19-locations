import React from "react";
import { useSelector } from "react-redux";
import Close from "../../assets/close.png";
import Casual from "../../assets/casual.png";
import classes from "./LocationsTable.module.css";

export default function LocationsTable() {
  const locations = useSelector((state) => state.locations.filteredLocations);

  return (
    <div className={classes.locationsTable}>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Date</th>
            <th>Exposure Level</th>
            <th>Published</th>
            <th>Advice</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((event) => (
            <tr key={event.eventId}>
              <td>{event.eventName}</td>
              <td>
                {new Date(event.startDateTime).toString().slice(0, -36)}
                <br></br> --- <br></br>{" "}
                {new Date(event.endDateTime).toString().slice(0, -36)}
              </td>
              <td>
                <img
                  src={event.exposureType === "Casual" ? Casual : Close}
                  alt={event.exposureType}
                  className={classes.exposureImage}
                />
              </td>
              <td>
                {new Date(event.publishedAt).toString().slice(0, -46) ===
                new Date().toString().slice(0, -46) ? (
                  <p>NEW</p>
                ) : (
                  ""
                )}
                <br></br>
                {new Date(event.publishedAt).toString().slice(0, -36)}
              </td>
              <td>Link</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={classes.pagination}>Pagination</div>
    </div>
  );
}
