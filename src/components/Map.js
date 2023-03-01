import { Grid, TextField } from '@mui/material';
import React, { useRef, useEffect } from 'react';
import withGoogleMaps from './HOC/withGoogleMaps';

const Map = ({ googleMaps }) => {
    const searchInput = useRef(null);
    const mapRef = useRef(null);
    const newMapRef = useRef(null);
    const markerRef = useRef(null);

    //const [selectedPlace, setSelectedPlace] = useState(null);

    // do something on address change
    const onChangeAddress = (autocomplete) => {
        const place = autocomplete.getPlace();
        //const lat = place.geometry.location.lat();
        //const lng = place.geometry.location.lng();
        //setSelectedPlace(place);

        let newMap = newMapRef.current;
        if (!markerRef.current) {
            markerRef.current = new googleMaps.Marker({
                map: newMap,
                position: place.geometry.location,
            });
        }

        newMap.setCenter(place.geometry.location);
        markerRef.current.setPosition(place.geometry.location);
    }

    // init autocomplete
    const initAutocomplete = () => {
        const autocomplete = new googleMaps.places.Autocomplete(searchInput.current);
        autocomplete.setFields(["address_component", "geometry"]);
        autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete));

        newMapRef.current = new googleMaps.Map(mapRef.current, {
            center: { lat: 3.1473265, lng: 101.6988555 },
            zoom: 11,
        });
    }

    // load map script after mounted
    useEffect(() => {
        initAutocomplete();
    }, []);

    return (<Grid
        container spacing={2}
    >
        <Grid item xs={12}>
            <TextField label="Enter a location" placeholder="Enter a location" inputRef={searchInput} />
        </Grid>
        <Grid item xs={12}>
            <div ref={mapRef} style={{ height: '400px', width: 'calc(100vw - 40px)' }}></div>
        </Grid>
    </Grid>);
};

export default withGoogleMaps(Map);