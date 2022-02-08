import { createSlice } from "@reduxjs/toolkit";

const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    locations: [],
    isLoaded: false,
  },
  reducers: {
    setLocationsData(state, action) {
      state.locations = action.payload.data;
      state.isLoaded = action.payload.loaded;
    },
  },
});

export const locationsActions = locationsSlice.actions;

export default locationsSlice;
