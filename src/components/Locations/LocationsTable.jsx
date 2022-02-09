import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Close from "../../assets/close.png";
import Casual from "../../assets/casual.png";
import classes from "./LocationsTable.module.css";

export default function LocationsTable() {
  const [displayLocations, setDisplayLocations] = useState([]);
  const [publishedFilterOn, setPublishedFilterOn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const locations = useSelector((state) => state.locations.filteredLocations);

  useEffect(() => {
    setDisplayLocations(locations);
  }, [locations]);

  // handle filter of display locations by published date
  const publishedSortHandler = () => {
    // 1. sort
    const sortedLocationsByPublish = locations
      .slice()
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    // 2. set display locations in state
    setDisplayLocations(sortedLocationsByPublish);

    // 3. set state for active case
    setPublishedFilterOn(!publishedFilterOn);
  };

  // Pagination Data
  // setDisplayPage, currentPage, len, resPerPage

  const resPerPage = 8;
  const len = displayLocations.length;
  const start = (currentPage - 1) * resPerPage;
  const end = currentPage * resPerPage;

  const displayLocationsOnPage = displayLocations.slice(start, end);

  const setDisplayPage = (btnAction) => {
    setCurrentPage((prevState) => {
      if (btnAction === "next") {
        return (prevState += 1);
      } else {
        return (prevState -= 1);
      }
    });
  };

  return (
    <div className={classes.locationsTable}>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Date</th>
            <th>Exposure Level</th>
            <th>
              Published
              <FilterAltIcon
                onClick={publishedSortHandler}
                className={
                  publishedFilterOn
                    ? classes.filterActive
                    : classes.filterNonActive
                }
              />
            </th>
            <th>Advice</th>
          </tr>
        </thead>
        <tbody>
          {displayLocationsOnPage.map((event) => (
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
      <div className={classes.pagination}>
        <Pagination
          setPage={setDisplayPage}
          currentPage={currentPage}
          len={len}
          resPerPage={resPerPage}
        />
      </div>
    </div>
  );
}
