import React from "react";
import {
  TextField,
  MenuItem,
  Card,
  CardContent,
  Button,
  Grid,
  Divider,
  Paper
} from "@material-ui/core";
import { reqURL } from "../../util/reqURL";
import { departments, courses } from "../../static/arrays";
import Logo from "../../Assets/icon/icon.png";

import localStyles from "./CourseForm.css";
class CourseForm extends React.Component {
  state = {
    department: "",
    course: ""
  };

  dataValidation = () => {
    let { department, course } = this.state;
    if (!department && !course) {
      alert("Depratment & Course not selected");
      return false;
    } else if (!department) {
      alert("Please select department");
      return false;
    } else if (!course) {
      alert("Please select Course");
      return false;
    } else return true;
  };
  handleChangeDepartment = event => {
    this.setState({
      department: event.target.value
    });
  };
  handleChangeCourse = event => {
    this.setState({
      course: event.target.value
    });
  };
  OpenSlide = () => {
    if (this.dataValidation()) {
      const URL =
        reqURL + this.state.course + "/Render/COMPLETE/ALL/" + "index.html";
      window.open(URL, "_blank");
    }
  };
  OpenSlidePDF = () => {
    const URL =
      reqURL +
      this.state.course +
      "/Render/COMPLETE/ALL/" +
      "index.html?print-pdf";
    window.open(URL, "_blank");
  };
  OpenSlidePDFDownload = () => {
    const URL =
      reqURL +
      this.state.course +
      "/Render/COMPLETE/ALL/" +
      "index.html?print-pdf?pdf-download";
    window.open(URL, "_blank");
  };
  render() {
    return (
      <Card>
        <CardContent>
          <Grid container justify="center" spacing={24}>
            <img className={localStyles.logo} src={Logo} />
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="standard-select-currency"
                select
                label="Department"
                value={this.state.department}
                onChange={e => this.handleChangeDepartment(e)}
                SelectProps={{
                  MenuProps: {}
                }}
                margin="normal"
              >
                {departments.map(option => {
                  return (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label.toUpperCase()}
                    </MenuItem>
                  );
                })}
              </TextField>
            </Grid>

            {/* COurse */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="standard-select-currency"
                select
                label="Course"
                value={this.state.course}
                onChange={e => this.handleChangeCourse(e)}
                SelectProps={{
                  MenuProps: {}
                }}
                margin="normal"
              >
                {this.state.department
                  ? courses[this.state.department].map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))
                  : null}
              </TextField>
            </Grid>

            <Divider />
            <Grid item xs={12}>
              <Grid container justify="center" spacing={24}>
                <Grid item xs={12} md={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => this.OpenSlide()}
                  >
                    View Online
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => this.OpenSlidePDF()}
                  >
                    View as PDF
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    onClick={() => this.OpenSlidePDFDownload()}
                  >
                    Download as PDF
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}
export default CourseForm;
