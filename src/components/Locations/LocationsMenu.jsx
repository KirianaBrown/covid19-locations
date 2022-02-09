import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { locationsActions } from "../../store/locations-slice";
import classes from "./LocationsMenu.module.css";

export default function LocationsMenu() {
  const dispatch = useDispatch();

  const [selectedCity, setSelectedCity] = useState("All Locations");

  const selectHandler = (e) => {
    setSelectedCity(e.target.value);
    dispatch(locationsActions.setSelectedCity({ city: e.target.value }));
  };

  const listOfCities = useSelector((state) => state.locations.uniqueCityNames);

  const alphaListOfCities = [...listOfCities].sort();

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
        {alphaListOfCities.map((city) => (
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
