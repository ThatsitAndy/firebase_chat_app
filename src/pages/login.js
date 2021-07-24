import React, { Component } from "react";
import PropTypes from "prop-types";
import Appicon from "../images/ti2.png";
import { Link } from "react-router-dom";
///MUI
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
/// REDUX
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/userActions";

const styles = (theme) => ({
  ...theme.spreadThis,
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    color: "white",
  },
});

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;

    function Copyright() {
      return (
        <Typography
          className={classes.input}
          variant="body2"
          color="secondary"
          align="center"
        >
          {"Copyright © AWB  "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      );
    }

    return (
      <Container className={classes.muiforms} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <img src={Appicon} alt="thatsit" className={classes.image} />

          <Typography
            variant="h2"
            color="secondary"
            className={classes.pageTitle}
          ></Typography>

          <form
            className={classes.form}
            autoComplete="off"
            noValidate
            onSubmit={this.handleSubmit}
          >
            <p class="light-l"> ⬇ EMAIL</p>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              InputProps={{
                className: classes.input,
              }}
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
            />

            <p class="light-l"> ⬇ PASSWORD</p>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              InputProps={{
                className: classes.input,
              }}
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />

            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Sign In
              {loading && (
                <CircularProgress size={20} className={classes.progress} />
              )}
            </Button>
            <br />
            <br />
            <Grid item>
              <Link className={classes.input} to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

const mapActionsToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(login));
