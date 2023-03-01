import { Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import GoogleMap from "./components/GoogleMap";
import History from "./components/History";
import PlacesAutoComplete from "./components/PlacesAutoComplete";
import './App.css';

const MuiTypography = styled(Typography)({
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
    gap={2}
    sx={{ padding: "20px 25px" }}
  >
    <MuiTypography variant="h4">
      <b>G</b><b>o</b><b>o</b><b>g</b><b>l</b><b>e</b> 
      <b> Places</b><b> A</b><b>u</b><b>t</b><b>o</b><b>c</b><b>o</b><b>mplete</b>
    </MuiTypography>
    <PlacesAutoComplete />
    <GoogleMap />
    <History />
  </Grid>);
}

export default App;
