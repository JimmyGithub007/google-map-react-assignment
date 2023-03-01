import { Card, Grid } from "@mui/material";
import Map from "./components/Map";
//import AutoComplete from "./components/AutoComplete";
//import GoogleApiWrapper from "./components/GoogleApiWrapper";

function App() {

  return (<>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ padding: "10px 20px" }}>
        <Map />
      </Card>
    </Grid>
  </>);
}

export default App;
