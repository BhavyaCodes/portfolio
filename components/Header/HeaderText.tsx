import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Buttons from "./Buttons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(6),
      },
    },
    title: {
      paddingRight: "20%",
    },
    hi: {
      color: "red",
    },
    paragraph: {
      paddingRight: "20%",
    },
  })
);

function HeaderText() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <article itemScope itemType="http://schema.org/Author">
        <Typography
          className={classes.title}
          variant="h2"
          component="h1"
          gutterBottom
          itemProp="name"
        >
          <span className={classes.hi}>Hi, </span>I'm Bhavya
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          A fullstack developer
        </Typography>
        <Typography className={classes.paragraph}>
          I specialize in developing and deploying responsive websites and web
          applications
        </Typography>
        <Buttons />
      </article>
    </Box>
  );
}

export default HeaderText;
