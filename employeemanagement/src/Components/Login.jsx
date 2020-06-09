import React, { Component } from "react";
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
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserName: "",
      Password: "",
    };

    this.UserName = this.UserName.bind(this);
    this.Password = this.Password.bind(this);
    this.login = this.login.bind(this);
  }

  UserName(event) {
    this.setState({ UserName: event.target.value });
  }

  Password(event) {
    this.setState({ Password: event.target.value });
  }

  login = () => {
    axios
      .post("https://localhost:44315/api/employee/login", {
        UserName: this.state.UserName,
        Password: this.state.Password,
      })
      .then((json) => {
        if (json.data.Success === "True") {
          console.log(json.data.Success);
          this.props.history.push("/Dashboard");
        } else {
          alert("Invalid User");
          debugger;
          this.props.history.push("/Login");
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
        marginTop: theme.spacing(1),
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
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="UserName"
              label="User Name"
              name="UserName"
              autoComplete="UserName"
              autoFocus
              onChange={this.UserName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Password"
              label="Password"
              type="Password"
              id="Password"
              autoComplete="current-password"
              onChange={this.Password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.login}
            >
              Login
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/Register" variant="body2">
                  {"Don't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}
export default Login;
