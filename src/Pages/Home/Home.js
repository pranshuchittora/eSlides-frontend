import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CourseFrom from "../../Components/CourseForm/CourseForm";
const ThemeForm = createMuiTheme({
  palette: {
    type: "light"
  }
});

function Home(props) {
  return (
    <MuiThemeProvider theme={ThemeForm}>
      <NavBar />
      <CourseFrom />
    </MuiThemeProvider>
  );
}

export default Home;
