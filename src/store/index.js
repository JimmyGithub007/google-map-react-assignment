import { configureStore } from "@reduxjs/toolkit";

import placesReducer from "./slice/placesSlice"

export default configureStore({
    reducer: {
        places: placesReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});