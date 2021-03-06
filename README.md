<p align="center">
  <a href="https://github.com/KirianaBrown/covid19-locations">
    <img src="./public/logo.png" alt="Project Demo" width="100" height="100">
  </a>

  <a href="https://stocks50.herokuapp.com/" target="__blank">
    <h2 align="center">Covid-19. New Zealand Locations of Interest</h2>
  </a>

  <p align="center">
    View the latest locations of Interest in New Zealand as published by the Ministry of Health NZ. 
</p>

<img src="./src/assets/demo.png" alt="Project Demo">

### About Project

Built using React with Redux & Redux Toolkit for state management this app provides a simple visual tool for users to access the latest locations of interest in New Zealand. Using Leaflet JS for map rendering adds the additional visualisation of locations as well as interactivity to view information on each marker.

#### Timing and sources

A Public API offered by the [Ministry of Health - Github](https://github.com/minhealthnz/nz-covid-data/tree/main/locations-of-interest) consisting of a single JSON endpoint.

Currently all data sources are expected to update once an hour, on the hour, but this schedule may be changed.
