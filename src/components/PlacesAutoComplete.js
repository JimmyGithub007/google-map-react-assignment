import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { InputAdornment, TextField } from "@mui/material";
import { SearchOutlined } from '@mui/icons-material';
import { styled } from "@mui/system";
import { addHistory, setPlace } from "../store/slice/placesSlice"
import moment from 'moment';

const AutoCompleteField = styled(TextField)({
    width: "100%",
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: "15px",
    },
    '@media (min-width: 768px)': {
        width: "500px"
    }
});

const PlacesAutoComplete = () => {
    const { googleMaps } = useSelector(state => state.places);
    const autoCompleteRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!googleMaps) return;
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

    return (<AutoCompleteField
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
    />)
}

export default PlacesAutoComplete;