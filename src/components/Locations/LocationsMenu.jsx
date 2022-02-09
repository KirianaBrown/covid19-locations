import React, { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./LocationsMenu.module.css";

export default function LocationsMenu() {
  const [selectedCity, setSelectedCity] = useState("All Locations");
  const locations = useSelector((state) => state.locations.locations.items);
  const cities = locations.map((city) => city.location.city);
  const uniqueCities = new Set(cities);
  const allCities = [...uniqueCities];

  const selectHandler = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className={classes.locationsMenu}>
      <ul>
        <li className={selectedCity === "All Locations" ? classes.active : ""}>
          <button
            onClick={selectHandler}
            className={classes.button}
            value="All Locations"
          >
            All Locations
          </button>
        </li>
        {allCities.map((city) => (
          <li
            key={city}
            className={selectedCity === city ? classes.active : ""}
          >
            <button
              onClick={selectHandler}
              className={classes.button}
              value={city}
            >
              {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
