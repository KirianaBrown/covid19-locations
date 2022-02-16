import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { locationsActions } from "../../store/locations-slice";
import { setFilteredLocations } from "../../store/locations-action";
import classes from "./LocationsMenu.module.css";

export default function LocationsMenu() {
  const dispatch = useDispatch();

  const [selectedCity, setSelectedCity] = useState("All Locations");

  // Dispatch actions to set selectedCity & filteredLocations in store

  const locations = useSelector((state) => state.locations.locations.items);

  const selectHandler = (e) => {
    setSelectedCity(e.target.value);
    if (e.target.value === "") {
      dispatch(locationsActions.setSelectedCity({ city: "All Locations" }));
    }
    dispatch(locationsActions.setSelectedCity({ city: e.target.value }));
    dispatch(setFilteredLocations(e.target.value, locations));
  };

  // Get Unique City Names
  const listOfCities = useSelector((state) => state.locations.uniqueCityNames);
  const alphaListOfCities = [...listOfCities].sort();

  return (
    <div className={classes.locationsMenu}>
      <select onChange={selectHandler} className={classes.locationsMenuSelect}>
        <option>All Locations</option>
        {alphaListOfCities.map((city) => (
          <option key={city} value={city}>
            {city === "" ? "Flights / Other" : city}
          </option>
        ))}
      </select>
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
            {city === "" ? (
              <button
                onClick={selectHandler}
                className={classes.button}
                value={""}
              >
                Flights / Other
              </button>
            ) : (
              <button
                onClick={selectHandler}
                className={classes.button}
                value={city}
              >
                {city}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
