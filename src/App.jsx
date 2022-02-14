import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocationData, setUniqueCities } from "./store/locations-action";
import Header from "./components/Ui/Header";
import Layout from "./components/Ui/Layout";
import Locations from "./components/Locations/Locations";
import Map from "./components/Map/Map";

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocationData());
  }, [dispatch]);

  const locationData = useSelector((state) => state.locations.isLoaded);

  const locations = useSelector((state) => state.locations.locations.items);

  useEffect(() => {
    locationData && setHasLoaded(true);
    locationData && dispatch(setUniqueCities(locations));
  }, [locationData, dispatch, locations]);

  return (
    <div>
      <Header />
      {!hasLoaded && <p>Loading ...</p>}
      <Layout>
        {hasLoaded && (
          <>
            <Locations locations={locations} />
            <Map />
          </>
        )}
      </Layout>
    </div>
  );
}

export default App;
