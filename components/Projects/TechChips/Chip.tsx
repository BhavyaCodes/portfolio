import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

type AppProps = {
  label: string;
  logo: string;
};

function Chip({ label, logo }: AppProps) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        // overflow: "hidden",
        "&:hover": {
          "& p": {
            opacity: 1,
          },
        },
      },
      imageContainer: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      image: {
        maxWidth: "100%",
      },
      label: {
        position: "relative",
        width: "300%",
        opacity: 0,
      },
    })
  );

  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.imageContainer}>
          <img className={classes.image} src={logo} />
        </Box>
        <Typography align="center" className={classes.label}>
          {label}
        </Typography>
      </Box>
    </>
  );
}

export default Chip;
