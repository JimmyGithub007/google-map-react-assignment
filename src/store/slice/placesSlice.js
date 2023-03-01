import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Loader } from '@googlemaps/js-api-loader';

export const googleMapsAPI = createAsyncThunk(
    'places/googleMapsAPI',
    async (API_KEY, { rejectWithValue }) => {
        try {
            const loader = new Promise(resolve => {
                setTimeout(() => {
                    resolve(
                        new Loader({
                            apiKey: API_KEY,
                            version: "weekly",
                            libraries: ["places"]
                        }).load()
                    );
                }, 2000)
            });

            const google = await loader;
            return google.maps;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const placesSlice = createSlice({
    name: "places",
    initialState: {
        history: [],
        place: {
            lat: null,
            lnt: null,
        },
        loading: true,
        error: null,
        googleMaps: null,
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
    },
    extraReducers: builder => {
        builder
            .addCase(googleMapsAPI.pending, state => {
                state.loading = true
            })
            .addCase(googleMapsAPI.fulfilled, (state, action) => {
                state.loading = false
                state.googleMaps = action.payload;
            })
            .addCase(googleMapsAPI.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload;
            });
    }
});

export const { addHistory, removeHistory, setPlace } = placesSlice.actions;
export default placesSlice.reducer;