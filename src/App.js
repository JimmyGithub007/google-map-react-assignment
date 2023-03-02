import { Badge, Grid, Grow, IconButton, Typography } from "@mui/material";
import { Close, HistoryOutlined, HistoryRounded, MapOutlined } from "@mui/icons-material";
import { MuiDrawer, MuiFloatButton, MuiShadowTypography, MuiTypography } from "./styles/Global";
import { useSelector } from "react-redux";
import { useState } from "react";

import GoogleMap from "./components/GoogleMap";
import History from "./components/History";
import PlacesAutoComplete from "./components/PlacesAutoComplete";
import withGoogleMaps from "./hoc/withGoogleMaps";

import './styles/App.css';

const App = () => {
  const { history } = useSelector(state => state.places);
  const [open, setOpen] = useState(false);

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
      <Grow in={true}>
        <MuiFloatButton size="medium" color="primary" aria-label="history" onClick={() => setOpen(true)}>
          <Badge
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            badgeContent={history.length}
            color="warning"
            max={99}
          >
            <HistoryRounded />
          </Badge>
        </MuiFloatButton>
      </Grow>
      <MuiDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <IconButton color="primary" sx={{ height: "40px", width: "40px" }} onClick={() => setOpen(false)}>
          <Close />
        </IconButton>
        <MuiShadowTypography>
          <MuiTypography>
            <b>H</b><b>i</b><b>s</b><b>t</b><b>o</b><b>r</b><b>y</b>
          </MuiTypography>
          <Typography>
            <HistoryOutlined /> Your Search History
          </Typography>
        </MuiShadowTypography>
        <History />
      </MuiDrawer>
    </Grid>);
}

export default withGoogleMaps(App);
