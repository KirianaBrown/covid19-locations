import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Close from "../../assets/close.png";
import Casual from "../../assets/casual.png";
import classes from "./LocationsTable.module.css";

export default function LocationsTable() {
  const [displayLocations, setDisplayLocations] = useState([]);

  const locations = useSelector((state) => state.locations.filteredLocations);

  useEffect(() => {
    setDisplayLocations(locations);
  }, [locations]);

  const publishedSortHandler = () => {
    console.log("published sort handler clicked");
    const sortedLocationsByPublish = locations
      .slice()
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    setDisplayLocations(sortedLocationsByPublish);
  };

  return (
    <div className={classes.locationsTable}>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Date</th>
            <th>Exposure Level</th>
            <th onClick={publishedSortHandler}>Published</th>
            <th>Advice</th>
          </tr>
        </thead>
        <tbody>
          {displayLocations.map((event) => (
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
                  <p className={classes.newPublish}>NEW</p>
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
