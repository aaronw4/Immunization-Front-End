import { makeStyles } from "@material-ui/core";
import { theme } from "./theme";

export const useStyles = makeStyles({
  root: {
    height: "90vh",
    width: "100%",
    margin: "0 auto",
    paddingTop: theme.spacing(5),
    background: "#f2f2f2",
    fontFamily: theme.typography.fontFamily,
    fontSize: "15px",
    [theme.breakpoints.up("md")]: {
      width: "80%"
    }
  },
  container: {
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      width: "400px",
      background: "#C5C5C5"
    }
  },
  labels: {
    width: "300px",
    "&:not(:first-child)": {
      marginTop: "30px"
    }
  },
  inputs: {
    height: "35px",
    width: "300px",
    margin: "0 auto"
  },
  errors: {
    marginTop: theme.spacing(4),
    color: theme.palette.secondary.dark
  }
});
