import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

function HeaderText2() {
  const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
      root: {
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingRight: "20%",
      },
      title: {},
      hi: {
        color: "red",
      },
    })
  );

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.title} variant="h2" gutterBottom>
        <span className={classes.hi}>Hi, </span>I'm Bhavya
      </Typography>
      <Typography variant="h4" gutterBottom>
        A fullstack developer
      </Typography>
      <Typography>
        I specialize in developing and deploying responsive websites and web
        applications
      </Typography>
    </Box>
  );
}

export default HeaderText2;
