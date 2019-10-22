import { withStyles, Button } from "@material-ui/core";
import { theme } from "./theme";

export const PatientButton = withStyles({
  root: {
    height: "75px",
    width: "250px",
    margin: "0 auto",
    marginTop: theme.spacing(4),
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    fontFamily: theme.typography.fontFamily,
    fontSize: "20px",
    fontWeight: "700",
    "&:hover": {
      background: theme.palette.primary.light
    }
  }
})(Button);

export const DoctorButton = withStyles({
  root: {
    height: "75px",
    width: "250px",
    margin: "0 auto",
    marginTop: theme.spacing(4),
    background: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
    fontFamily: theme.typography.fontFamily,
    fontSize: "20px",
    fontWeight: "700",
    "&:hover": {
      background: theme.palette.secondary.light
    }
  }
})(Button);

export const LoginButton = withStyles({
  root: {
    height: "50px",
    width: "175px",
    margin: "0 auto",
    marginTop: theme.spacing(4),
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    fontFamily: theme.typography.fontFamily,
    fontSize: "15px",
    fontWeight: "500",
    "&:hover": {
      background: theme.palette.primary.light
    }
  }
})(Button);
