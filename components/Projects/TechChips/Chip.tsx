import { useSpring, animated as a } from "react-spring";

import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

type AppProps = {
  label: string;
  logo: string;
  invert?: boolean;
};

function Chip({ label, logo, invert }: AppProps) {
  const useStyles = makeStyles((_theme: Theme) =>
    createStyles({
      root: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
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
        filter: `invert(${invert ? "100%" : "0%"})`,
      },
      label: {
        position: "relative",
        opacity: 0,
      },
    })
  );

  const classes = useStyles();

  const [props, set] = useSpring<{ zoom: number }>(() => ({
    zoom: 1,
    config: { mass: 1, tension: 500, friction: 15 },
  }));

  const trans: any = (zoom: number) => `scale(${zoom})`;

  return (
    <>
      <Box className={classes.root}>
        <a.div
          onMouseEnter={() => set({ zoom: 1.2 })}
          onMouseLeave={() => set({ zoom: 1 })}
          style={{ transform: props.zoom.interpolate(trans) }}
          className={classes.imageContainer}
        >
          <img className={classes.image} src={logo} />
        </a.div>
        <Typography align="center" className={classes.label}>
          {label}
        </Typography>
      </Box>
    </>
  );
}

export default Chip;
