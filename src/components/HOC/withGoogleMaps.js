import React, { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const withGoogleMaps = (Component) => {
  const WithGoogleMaps = (props) => {
    const [googleMaps, setGoogleMaps] = useState(null);

    useEffect(() => {
      const loader = new Loader({
        apiKey: 'AIzaSyBPOOWbwJf6UxYSUV7Z68dEjwGV-jvbyyo',
        version: 'weekly',
        libraries: ["places"]
      });

      loader.load().then(google => {
        setGoogleMaps(google.maps);
      });
    }, []);

    if (!googleMaps) {
      return null; // or render a loading spinner
    }

    return <Component googleMaps={googleMaps} {...props} />;
  };

  return WithGoogleMaps;
};

export default withGoogleMaps;