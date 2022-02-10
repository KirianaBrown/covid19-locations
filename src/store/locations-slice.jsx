import { createSlice } from "@reduxjs/toolkit";

const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    locations: [],
    isLoaded: false,
    selectedCity: "All Locations",
    uniqueCityNames: [],
    filteredLocations: [],
    displayLocations: [],
  },
  reducers: {
    setLocationsData(state, action) {
      state.locations = action.payload.data;
      state.isLoaded = action.payload.loaded;
    },
    setSelectedCity(state, action) {
      state.selectedCity = action.payload.city;
    },
    setUniqueCityNames(state, action) {
      state.uniqueCityNames = action.payload.data;
    },
    setFilteredLocations(state, action) {
      state.filteredLocations = action.payload.data;
    },
    setDisplayLocations(state, action) {
      state.displayLocations = action.payload.data;
    },
  },
});

export const locationsActions = locationsSlice.actions;

export default locationsSlice;
