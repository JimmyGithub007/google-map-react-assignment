import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, InputAdornment } from "@mui/material";
import { Close, SearchOutlined } from '@mui/icons-material';
import { addHistory, setPlace } from "../store/slice/placesSlice"
import { MuiAutoCompleteField } from "../styles/Global";
import moment from 'moment';

const PlacesAutoComplete = () => {
    const { googleMaps } = useSelector(state => state.places);
    const [ search, setSearch ] = useState("");
    const autoCompleteRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!googleMaps) return;
        const autocomplete = new googleMaps.places.Autocomplete(autoCompleteRef.current);
        autocomplete.setFields(["address_component", "geometry"]);
        autocomplete.addListener("place_changed", () => {
            const p = autocomplete.getPlace();
            const lat = p.geometry.location.lat();
            const lng = p.geometry.location.lng();

            dispatch(setPlace({ lat, lng }));
            dispatch(addHistory({
                address: autoCompleteRef.current.value,
                location: { lat, lng },
                time: moment().format('MMMM Do YYYY, h:mm:ss a')
            }));
        });
    }, [googleMaps, dispatch])

    return (<MuiAutoCompleteField
        inputRef={autoCompleteRef}
        fullWidth
        onChange={e => setSearch(e.target.value) }
        placeholder="Enter a location"
        InputProps={{
            endAdornment: (
                <InputAdornment position="start">
                    {   search === "" ? <SearchOutlined /> :
                        <IconButton onClick={() => { setSearch(""); autoCompleteRef.current.value = ""; }}>
                            <Close />
                        </IconButton>
                    }
                </InputAdornment>
            )
        }}
    />)
}

export default PlacesAutoComplete;