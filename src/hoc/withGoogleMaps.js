import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { googleMapsAPI } from '../store/slice/placesSlice';
import { MuiProgress } from '../styles/Global';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const withGoogleMaps = (Component) => {
  const WithGoogleMaps = (props) => {
    const { loading } = useSelector(state => state.places);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(googleMapsAPI(API_KEY));
    }, [dispatch]);

    if (loading) return <MuiProgress />;

    return <Component {...props} />;
  };

  return WithGoogleMaps;
};

export default withGoogleMaps;