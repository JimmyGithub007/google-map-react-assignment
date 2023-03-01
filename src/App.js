import { Grid, Typography } from "@mui/material";
import { HistoryOutlined, MapOutlined } from "@mui/icons-material";

import styled from "@emotion/styled";
import GoogleMap from "./components/GoogleMap";
import History from "./components/History";
import PlacesAutoComplete from "./components/PlacesAutoComplete";
import './App.css';

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

const App = () => {
  return (<Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    gap={1}
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
    <MuiShadowTypography>
      <MuiTypography>
        <b>H</b><b>i</b><b>s</b><b>t</b><b>o</b><b>r</b><b>y</b>
      </MuiTypography>
      <Typography>
        <HistoryOutlined /> Your Search History
      </Typography>
    </MuiShadowTypography>
    <History />
  </Grid>);
}

export default App;
