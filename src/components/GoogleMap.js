import { Card, Grow } from '@mui/material';
import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styled from '@emotion/styled';
import withGoogleMaps from './HOC/withGoogleMaps';

const MuiCard = styled(Card)({
    borderRadius: "15px",
});

const GoogleMap = ({ googleMaps }) => {
    const { place } = useSelector(state => state.places);
    const [ map, setMap ] = useState(null); 
    const [ marker, setMarker ] = useState(null); 
    const googleMapRef = useRef(null);

    useEffect(() => {
        if(map && place.lat && place.lng){ 
            map.setCenter(place);
            if(marker) {
                marker.setPosition(place);
            } else {
                setMarker(new googleMaps.Marker({
                    map,
                    position: place,
                }));
            }
        }
    }, [googleMaps, place, map, marker])

    useEffect(() => {
        setMap(new googleMaps.Map(googleMapRef.current, {
            center: { lat: 3.1473265, lng: 101.6988555 },
            zoom: 11,
        }));
    }, [googleMaps]);

    return (<Grow in={true}><MuiCard>
        <div ref={googleMapRef} style={{ height: '500px', width: 'calc(100vw - 40px)' }}></div>
    </MuiCard></Grow>);
};

export default withGoogleMaps(GoogleMap);