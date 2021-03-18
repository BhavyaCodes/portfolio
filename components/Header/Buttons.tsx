import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import ForumIcon from "@material-ui/icons/Forum";
import CodeIcon from "@material-ui/icons/Code";
import { Box, IconButton, Link, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

function Buttons() {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        marginRight: theme.spacing(2),
      },
    })
  );

  const classes = useStyles();
  return (
    <>
      <Box ml={-1}>
        <Link
          href="https://github.com/Juggernaut9"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <IconButton
            aria-label="Github profile"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link
          href="https://www.linkedin.com/in/bhavya-tomar-1967b6202"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <IconButton
            aria-label="Github repository link"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link
          href="https://twitter.com/bhavyacodes"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <IconButton
            aria-label="Github repository link"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Link>
      </Box>
      <Box mt={2}>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className={classes.button}
          startIcon={<ForumIcon />}
        >
          Get in touch
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          startIcon={<CodeIcon />}
        >
          See my work
        </Button>
      </Box>
    </>
  );
}

export default Buttons;
