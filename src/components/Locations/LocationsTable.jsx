import React from "react";
import Close from "../../assets/close.png";
import Casual from "../../assets/casual.png";
import classes from "./LocationsTable.module.css";

export default function LocationsTable() {
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
          <tr>
            <td>PaknSave Supermarket Manukau</td>
            <td>
              2022-08-01 NZDT <br></br> 2022-08-09 NZDT
            </td>
            <td>
              <img
                src={Casual}
                alt="Close Contact"
                className={classes.exposureImage}
              />
            </td>
            <td>2022-08-01 NZDT</td>
            <td>Link</td>
          </tr>
          <tr>
            <td>PaknSave Supermarket Manukau</td>
            <td>
              2022-08-01 NZDT <br></br> 2022-08-09 NZDT
            </td>
            <td>
              <img
                src={Close}
                alt="Close Contact"
                className={classes.exposureImage}
              />
            </td>
            <td>2022-08-01 NZDT</td>
            <td>Link</td>
          </tr>
        </tbody>
      </table>
      <div className={classes.pagination}>Pagination</div>
    </div>
  );
}
