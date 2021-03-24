import {
  Container,
  Grid,
  Typography,
  Box,
  IconButton,
  Link,
  TextField,
  Button,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import SendIcon from "@material-ui/icons/Send";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

function Contact() {
  const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
      icons: {
        display: "flex",
        justifyContent: "space-around",
      },
    })
  );
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid item md={6} sm={12}>
          <Typography variant="h3" align="center">
            Connect with me
          </Typography>
          <Box className={classes.icons}>
            <Link
              href="https://github.com/Juggernaut9"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <IconButton
                aria-label="Github profile"
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
                aria-haspopup="true"
                color="inherit"
              >
                <TwitterIcon fontSize="large" />
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
                aria-haspopup="true"
                color="inherit"
              >
                <MailIcon fontSize="large" />
              </IconButton>
            </Link>
          </Box>
        </Grid>
        <Grid item md={6} sm={12}>
          <Typography variant="h3" align="center">
            Say Hi
          </Typography>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Message"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            variant="outlined"
          />
          <Button variant="outlined" endIcon={<SendIcon />}>
            send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
