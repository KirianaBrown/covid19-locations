import { useSelector } from "react-redux";
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
      dispatch(
        locationsActions.setLocationsData({
          data: locationData,
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
    // const locations = useSelector((state) => state.locations.locations.items);
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
