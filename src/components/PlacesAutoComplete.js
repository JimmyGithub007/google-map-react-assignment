import { useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import { Grow, InputAdornment, TextField } from "@mui/material";
import { SearchOutlined } from '@mui/icons-material';
import { styled } from "@mui/system";
import moment from 'moment';

import withGoogleMaps from "./HOC/withGoogleMaps";
import { addHistory, setPlace } from "../redux/slice/placesSlice"

const AutoCompleteField = styled(TextField)({
    width: "100%",
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: "15px",
    },
    '@media (min-width: 768px)': {
        width: "500px"
    }
});

const PlacesAutoComplete = ({ googleMaps }) => {
    const autoCompleteRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const autocomplete = new googleMaps.places.Autocomplete(autoCompleteRef.current);
        autocomplete.setFields(["address_component", "geometry"]);
        autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();
            const lat = place.geometry.location.lat();
            const lng = place.geometry.location.lng();

            dispatch(setPlace({ lat, lng }));
            dispatch(addHistory({
                address: autoCompleteRef.current.value,
                location: { lat, lng },
                time: moment().format('MMMM Do YYYY, h:mm:ss a')
            }));
        });
    }, [googleMaps, dispatch])

    return (<Grow in={true}>
        <AutoCompleteField
            fullWidth
            label="Enter a location"
            placeholder="Enter a location"
            inputRef={autoCompleteRef}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <SearchOutlined />
                    </InputAdornment>
                )
            }}
        />
    </Grow>)
}

export default withGoogleMaps(PlacesAutoComplete);