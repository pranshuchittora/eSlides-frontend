import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { Grid } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CourseFrom from "../../Components/CourseForm/CourseForm";
import localStyles from "./Home.css";
import {
  teal,
  blue,
  indigo,
  green,
  yellow,
  grey
} from "@material-ui/core/colors";

const ThemeForm = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: grey[900]
    },
    secondary: {
      main: indigo[700]
    }
  }
});

function Home(props) {
  return (
    <MuiThemeProvider theme={ThemeForm}>
      <div className={localStyles.contRoot}>
        <NavBar />
        <Grid
          container
          spacing={24}
          justify="center"
          className={localStyles.gridRoot}
        >
          <Grid
            item
            className={localStyles.formCont}
            xs={12}
            sm={6}
            lg={4}
            xl={3}
          >
            <CourseFrom />
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default Home;
