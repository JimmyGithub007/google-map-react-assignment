import { Grid, Grow, Typography } from "@mui/material";
import { MapOutlined } from "@mui/icons-material";
import { MuiShadowTypography, MuiTypography } from "./styles/Global";

import GoogleMap from "./components/GoogleMap";
import PlacesAutoComplete from "./components/PlacesAutoComplete";
import HistoryDrawer from "./components/HistoryDrawer";
import withGoogleMaps from "./hoc/withGoogleMaps";

import './styles/App.css';

const App = () => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Grow in={true}>
        <Grid
          container
          direction="column"
          alignItems="center"
          gap={1}
          sx={{ padding: "20px" }}
        >
          <MuiShadowTypography>
            <MuiTypography>
              <b>G</b><b>o</b><b>o</b><b>g</b><b>l</b><b>e</b>
              <b> Places</b><b> A</b><b>u</b><b>t</b><b>o</b><b>c</b><b>o</b><b>mplete</b>
            </MuiTypography>
            <Typography>
              <MapOutlined /> Google Places Autocomplete
            </Typography>
          </MuiShadowTypography>
          <PlacesAutoComplete />
          <GoogleMap />
        </Grid>
      </Grow>
      <HistoryDrawer />
    </Grid>);
}

export default withGoogleMaps(App);
