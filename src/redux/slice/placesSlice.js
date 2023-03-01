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
        addHistory: (state, action) => {
            state.history.unshift(action.payload);
        },
        removeHistory: (state, action) => {
            state.history.splice(action.payload, 1);
        },
        setPlace: (state, action) => {
            state.place = action.payload;
        },
    }
});

export const { addHistory, removeHistory, setPlace } = placesSlice.actions;
export default placesSlice.reducer;