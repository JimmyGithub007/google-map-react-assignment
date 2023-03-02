import { Badge, Drawer, Fab, Grid, Grow, IconButton, Typography } from "@mui/material";
import { Close, HistoryOutlined, HistoryRounded, MapOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";

import styled from "@emotion/styled";
import GoogleMap from "./components/GoogleMap";
import History from "./components/History";
import PlacesAutoComplete from "./components/PlacesAutoComplete";
import withGoogleMaps from "./hoc/withGoogleMaps";
import './App.css';
import { useState } from "react";

const MuiShadowTypography = styled("div")({
  display: "flex",
  justifyContent: "center",
  position: "relative",
  textAlign: "center",
  width: "100%",
  '.MuiTypography-root:nth-of-type(2)': {
    alignItems: "center",
    color: "#e8eaed82",
    display: "flex",
    fontSize: "25px",
    fontWeight: "900",
    position: "absolute",
    top: "8px",
    zIndex: "-1",
    'svg': {
      fontSize: "inherit",
    },
    '@media (min-width: 480px)': {
      fontSize: "40px"
    },
    '@media (min-width: 768px)': {
      fontSize: "45px"
    }
  }
});

const MuiTypography = styled(Typography)({
  fontSize: "25px",
  '@media (min-width: 480px)': {
    fontSize: "30px"
  },
  '@media (min-width: 768px)': {
    fontSize: "35px"
  },
  'b:nth-of-type(1), b:nth-of-type(4), b:nth-of-type(8), b:nth-of-type(11)': {
    color: "#4285F4"
  },
  'b:nth-of-type(2), b:nth-of-type(6), b:nth-of-type(9), b:nth-of-type(13)': {
    color: "#EA4335"
  },
  'b:nth-of-type(3), b:nth-of-type(10)': {
    color: "#FBBC05"
  },
  'b:nth-of-type(5), b:nth-of-type(12)': {
    color: "#34A853"
  },
  'b:nth-of-type(7), b:nth-of-type(14)': {
    color: "#767676"
  }
});

const MuiFloatButton = styled(Fab)({
  position: 'absolute',
  bottom: 16,
  right: 16,
  '.MuiBadge-badge': {
    top: "-6px",
    left: "-5px",
    height: "25px",
    width: "25px",
    borderRadius: "100%",
  }
});

const MuiDrawer = styled(Drawer)({
  '.MuiDrawer-paper': {
    width: "100vw",
    '@media (min-width: 576px)': {
      width: "500px"
    }
  }
});

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
