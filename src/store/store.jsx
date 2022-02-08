import { configureStore } from "@reduxjs/toolkit";
import locationsSlice from "./locations-slice";

const store = configureStore({
  reducer: { locations: locationsSlice.reducer },
});

export default store;
