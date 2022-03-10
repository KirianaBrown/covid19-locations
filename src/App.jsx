import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocationData, setUniqueCities } from "./store/locations-action";
import Loader from "./components/Ui/Loader";
import Header from "./components/Ui/Header";
import Layout from "./components/Ui/Layout";
import ModalDisclaimer from "./components/Ui/ModalDisclaimer";
import Locations from "./components/Locations/Locations";
import Map from "./components/Map/Map";

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocationData());
  }, [dispatch]);

  const locationData = useSelector((state) => state.locations.isLoaded);

  const locations = useSelector((state) => state.locations.loadedLocations);

  useEffect(() => {
    locationData && setHasLoaded(true);
    locationData && dispatch(setUniqueCities(locations));
  }, [locationData, dispatch, locations]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <>
          <ModalDisclaimer />
          <Header />
          {!hasLoaded && <Loader />}
          <Layout>
            {hasLoaded && (
              <>
                <Locations locations={locations} />
                <Map />
              </>
            )}
          </Layout>
        </>
      )}
    </div>
  );
}

export default App;
