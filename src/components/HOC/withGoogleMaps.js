import { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const withGoogleMaps = (Component) => {
  const WithGoogleMaps = (props) => {
    const [googleMaps, setGoogleMaps] = useState(null);

    useEffect(() => {
      const loader = new Loader({
        apiKey: API_KEY,
        version: "weekly",
        libraries: ["places"]
      });

      loader.load().then(google => {
        setGoogleMaps(google.maps);
      });
    }, []);

    if (!googleMaps) {
      return null;
    }

    return <Component googleMaps={googleMaps} {...props} />;
  };

  return WithGoogleMaps;
};

export default withGoogleMaps;