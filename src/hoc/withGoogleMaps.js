import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { googleMapsAPI } from '../store/slice/placesSlice';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const withGoogleMaps = (Component) => {
  const WithGoogleMaps = (props) => {
    const dispatch = useDispatch(null);

    useEffect(() => {
      dispatch(googleMapsAPI(API_KEY));
    }, [dispatch]);

    return <Component {...props} />;
  };

  return WithGoogleMaps;
};

export default withGoogleMaps;