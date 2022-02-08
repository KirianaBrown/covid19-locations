import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocationData } from "./store/locations-action";
import Header from "./components/Header";

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
      {hasLoaded && <h1>Loaded Data</h1>}
    </div>
  );
}

export default App;
