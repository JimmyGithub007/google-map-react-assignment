import { useEffect, useRef } from "react";

const GoogleApiWrapper = () => {
    const mapRef = useRef(null);

    const initMap = () => {
        if (!mapRef.current) return;

        new window.google.maps.Map(mapRef.current, {
            center: { lat: 40.749933, lng: -73.98633 },
            zoom: 13,
        });
    }

    useEffect(() => {
        initMap();
    }, [])
    
    return (<div ref={mapRef} style={{ width: "500px", height: "500px" }}></div>)
}

export default GoogleApiWrapper;