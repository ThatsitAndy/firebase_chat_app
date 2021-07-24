export default {
  palette: {
    primary: {
      light: "#e3f2fd",
      main: "#121212",
      dark: "#080808",
      contrastText: "#fff",
    },
    secondary: {
      light: "#c8fbfb",
      main: "#bbfbfb",
      dark: "#e545fe",
      contrastText: "#fff",
    },
  },
  spreadThis: {
    typography: {
      useNextVariants: true,
    },
    form: {
      textAlign: "center",
      color: "#fff",
    },
    image: {
      margin: "20px auto 20px auto",
    },
    pageTitle: {
      margin: "10px auto 10px auto",
    },
    textField: {
      margin: "10px auto 10px auto",
      color: "secondary",
    },
    input: {
      backgroundColor: "#121212",
      align: "center",
      color: "#fff",
    },

    button: {
      marginTop: 20,
      position: "relative",
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10,
    },
    progress: {
      position: "absolute",
    },
    invisibleSeparator: {
      border: "none",
      margin: 4,
    },
    visibleSeparator: {
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 20,
    },
    muiforms: {
      backgroundColor: "#",
    },
    paper: {
      padding: 20,
      backgroundColor: "#1a1a1a",
    },
    profile: {
      "& .image-wrapper": {
        textAlign: "center",
        color: "#bbfbfb",
        position: "relative",
        "& button": {
          position: "absolute",
          top: "80%",
          left: "70%",
        },
      },
      "& .profile-image": {
        width: 200,
        height: 200,
        objectFit: "cover",
        maxWidth: "100%",
        borderRadius: "50%",
      },
      "& .profile-details": {
        border: "1px solid rgba(0, 0, 0, 0.05)",
        borderRadius: "5px",
        textAlign: "center",
        "& span, svg": {
          verticalAlign: "middle",
        },
        "& a": {
          color: "#00bcd4",
        },
      },
      "& hr": {
        border: "none",
        margin: "0 0 10px 0",
        color: "#bbfbfb",
      },
      "& svg.button": {
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    buttons: {
      color: "121212",
      textAlign: "center",
      "& a": {
        margin: "20px 10px",
      },
    },
  },
};
// Fix TypeError: color.charAt with spreadThis  spreadThis: {}
