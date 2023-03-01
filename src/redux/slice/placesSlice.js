import { createSlice } from "@reduxjs/toolkit";

export const placesSlice = createSlice({
    name: "places",
    initialState: {
        history: [],
        place: {
            lat: null,
            lnt: null,
        },
    },
    reducers: {
        setHistory: (state, action) => {
            state.history.unshift(action.payload);
        },
        setPlace: (state, action) => {
            state.place = action.payload;
        },
    }
});

export const { setHistory, setPlace } = placesSlice.actions;
export default placesSlice.reducer;