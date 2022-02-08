import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocationData } from "./store/locations-action";
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

  useEffect(() => {
    locationData && setHasLoaded(true);
  }, [locationData]);

  return (
    <div>
      <Header />
      {!hasLoaded && <p>Loading ...</p>}
      <Layout>
        {hasLoaded && <Locations />}
        <Map />
      </Layout>
    </div>
  );
}

export default App;
