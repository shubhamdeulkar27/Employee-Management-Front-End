import React, { Component } from "react";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Role: "",
      EmailId: "",
      UseerName: "",
      Password: "",
    };

    this.Role = this.Role.bind(this);
    this.EmailId = this.EmailId.bind(this);
    this.UserName = this.UserName.bind(this);
    this.Password = this.Password.bind(this);
  }

  Role(event) {
    this.setState({ Role: event.target.value });
  }

  EmailId(event) {
    this.setState({ EmailId: event.target.value });
  }

  UserName(event) {
    this.setState({ UserName: event.target.value });
  }

  Password(event) {
    this.setState({ Password: event.target.value });
  }

  Register = () => {
    axios
      .post("https://localhost:44315/api/employee/registeruser", {
        Role: this.state.Role,
        EmailId: this.state.EmailId,
        UserName: this.state.UserName,
        Password: this.state.Password,
      })
      .then((json) => {
        if (json.data.Success === "True") {
          console.log(json.data.Success);
          alert("Data Saved Successfully");
          this.props.history.push("/Login");
        } else {
          alert("Data not Saved");
          debugger;
          this.props.history.push("/Register");
        }
      });
  };

  render() {
    const classes = makeStyles((theme) => ({
      paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      },
      avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
      form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
      },
    }));

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Role"
                  name="Role"
                  variant="outlined"
                  required
                  fullWidth
                  id="Role"
                  label="Role"
                  autoFocus
                  onChange={this.Role}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="UserName"
                  label="Username"
                  name="UserName"
                  autoComplete="UserName"
                  onChange={this.UserName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="EmailId"
                  label="Email Address"
                  name="EmailId"
                  autoComplete="EmailId"
                  onChange={this.EmailId}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="Password"
                  id="Password"
                  autoComplete="current-password"
                  onChange={this.Password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.Register}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

export default Register;
