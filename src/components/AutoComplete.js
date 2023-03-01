//import { Card, Grid, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

//const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const AutoComplete = () => {
  const searchInput = useRef(null);
  //const [selectedPlace, setSelectedPlace] = useState(null);

  // do something on address change
  const onChangeAddress = (autocomplete) => {
    //const place = autocomplete.getPlace();
    //const lat = place.geometry.location.lat();
    //const lng = place.geometry.location.lng();

    //setSelectedPlace(place);
  }

  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete));
  }

  // load map script after mounted
  useEffect(() => {
    initAutocomplete();
  }, []);

  return (<input type="text" ref={searchInput} />);
}

export default AutoComplete;
