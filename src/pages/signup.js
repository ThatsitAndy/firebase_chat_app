import React, { Component } from "react";
import PropTypes from "prop-types";
import Appicon from "../images/ti2.png";
import { Link } from "react-router-dom";
///MUI
import withStyles from "@material-ui/core/styles/withStyles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
//REDUX
import { connect } from "react-redux";
import { signupUser } from "../redux/actions/userActions";

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

class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      handle: "",
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
    this.setState({
      loading: true,
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      handle: this.state.handle,
    };
    this.props.signupUser(newUserData, this.props.history);
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
            <p class="light-l">EMAIL ⬇</p>
            <TextField
              color="secondary"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
              InputProps={{
                className: classes.input,
              }}
              id="email"
              name="email"
              type="email"
              className={classes.textField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <p class="light-l">PASSWORD ⬇</p>
            <TextField
              color="secondary"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
              InputProps={{
                className: classes.input,
              }}
              id="password"
              name="password"
              type="password"
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
            />
            <p class="light-l">CONFIRM ⬇</p>
            <TextField
              color="secondary"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
              InputProps={{
                className: classes.input,
              }}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className={classes.textField}
              helperText={errors.ConfirmPassword}
              error={errors.ConfirmPassword ? true : false}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
            />
            <p class="light-l">USERNAME ⬇ </p>
            <TextField
              color="secondary"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
              InputProps={{
                className: classes.input,
              }}
              id="handle"
              name="handle"
              type="text"
              className={classes.textField}
              helperText={errors.handle}
              error={errors.handle ? true : false}
              value={this.state.handle}
              onChange={this.handleChange}
            />

            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary.light"
              className={classes.button}
              disabled={loading}
            >
              Signup
              {loading && (
                <CircularProgress size={20} className={classes.progress} />
              )}
            </Button>
            <br />
            <br />
            <Grid item>
              <Link className={classes.input} to="/login" variant="body2">
                {"Already have an account ? login here"}
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

signup.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps, { signupUser })(
  withStyles(styles)(signup)
);
