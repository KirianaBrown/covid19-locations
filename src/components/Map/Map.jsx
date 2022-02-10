import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet";
import * as L from "leaflet";
import Casual from "../../assets/casual.png";
import Close from "../../assets/close.png";
import classes from "./Map.module.css";

export default function Map(props) {
  const [markerLocations, setMarkerLocations] = useState([]);

  const defaultPosition = [-36.8509, 174.7645]; // Auckland
  // const markerLocations = useSelector(
  //   (state) => state.locations.displayLocations
  // );

  const allLocations = useSelector((state) => state.locations.locations.items);

  useEffect(() => {
    if (allLocations) {
      const locationsWithCoords = allLocations.filter(
        (location) => location.location.latitude !== ""
      );
      setMarkerLocations(locationsWithCoords);
    } else {
      console.log("No locations");
    }
  }, [allLocations]);

  return (
    <div className={classes.mapContainer}>
      <MapContainer
        center={defaultPosition}
        zoom={11}
        scrollWheelZoom={false}
        zoomControl={false}
        setView={defaultPosition}
        className={classes.map}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomleft" />
        {markerLocations.length > 0 ? (
          markerLocations.map((el) => (
            <Marker
              position={[el.location.latitude, el.location.longitude]}
              key={el.eventId}
            >
              <Popup>
                {el.eventName} <br></br>
                <img
                  src={el.exposureType === "Casual" ? Casual : Close}
                  alt={el.exposureType}
                  className={classes.exposureImage}
                />
              </Popup>
            </Marker>
          ))
        ) : (
          <Marker position={[-36.8509, 174.7645]}>
            <Popup>Auckland NZ</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
