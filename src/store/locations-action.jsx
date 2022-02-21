import { locationsActions } from "./locations-slice";

export const fetchLocationData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        `https://api.integration.covid19.health.nz/locations/v1/current-locations-of-interest`
      );

      if (!res.ok) {
        throw new Error("Error fetching location data");
      }

      const data = await res.json();
      return data;
    };

    try {
      const locationData = await fetchData();

      const indexes = [];

      locationData.items.forEach((cur, index) => {
        if (cur.eventName.includes("Flight")) {
          console.log(cur);
          indexes.push(index);
        }
      });

      const updatedItems = locationData.items.map((cur, index) => {
        let updatedItem;

        if (indexes.includes(index)) {
          updatedItem = {
            ...cur,
            location: {
              city: "Flight/Other",
              latitude: "",
              longitude: "",
              suburb: "",
              address: "",
            },
          };
          locationData.items[index] = updatedItem;
        } else {
          updatedItem = cur;
        }

        return updatedItem;
      });

      dispatch(
        locationsActions.setLocationsData({
          data: locationData,
          locations: updatedItems,
          loaded: true,
        })
      );
    } catch (error) {
      console.log(`Error setting location data into state: ${error}`);
    }
  };
};

export const setUniqueCities = (locations) => {
  return (dispatch) => {
    const cities = locations.map((city) => city.location.city);
    const unique = new Set(cities);
    const fullListOfCities = [...unique];

    dispatch(
      locationsActions.setUniqueCityNames({
        data: fullListOfCities,
      })
    );
  };
};

export const setFilteredLocations = (city, locations) => {
  return (dispatch) => {
    let filteredLocations = [];

    if (city === "All Locations") {
      filteredLocations = locations;
    } else {
      filteredLocations = locations.filter(
        (location) => location.location.city === city
      );
    }

    dispatch(
      locationsActions.setFilteredLocations({
        data: filteredLocations,
      })
    );
  };
};

export const setDisplayLocationsInState = (locations) => {
  return (dispatch) => {
    dispatch(
      locationsActions.setDisplayLocations({
        data: locations,
      })
    );
  };
};

export const setFocusCoordsInState = (coords) => {
  return (dispatch) => {
    dispatch(
      locationsActions.setFocusCoords({
        data: coords,
      })
    );
  };
};
