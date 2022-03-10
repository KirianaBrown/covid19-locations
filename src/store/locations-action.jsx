import { locationsActions } from "./locations-slice";

export const fetchLocationData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      /* PREVIOUS MINISTRY OF HEALTH API - NO LONGER SUPPORTED
        HAS BEEN REPLACED WITH MOCK JSON-SERVER API
       const res = await fetch(
         `https://api.integration.covid19.health.nz/locations/v1/current-locations-of-interest`
       ); 
      */

      const res = await fetch(
        `https://covid-locations-api.herokuapp.com/items`
      );

      if (!res.ok) {
        throw new Error("Error fetching location data");
      }

      const data = await res.json();

      return data;
    };

    try {
      const locationData = await fetchData();
      console.log(locationData);

      const indexes = [];

      locationData.forEach((cur, index) => {
        if (
          cur.eventName.includes("Flight") ||
          cur.eventName.includes("FLIGHT") ||
          cur.eventName.includes("flight") ||
          cur.eventName.includes("Bus") ||
          cur.eventName.includes("BUS") ||
          cur.eventName.includes("bus")
        ) {
          indexes.push(index);
        }
      });

      const updatedItems = locationData.map((cur, index) => {
        let updatedItem;

        if (indexes.includes(index)) {
          updatedItem = {
            ...cur,
            location: {
              city: "Flight/Bus/Other",
              latitude: "",
              longitude: "",
              suburb: "",
              address: "",
            },
          };
          locationData[index] = updatedItem;
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
