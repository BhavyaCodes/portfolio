import { useSpring, animated as a } from "react-spring";

import { Box, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { StackType } from "lib/projects";

function Chip({ label, logo, invert }: StackType) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column",
        "&:hover": {
          "& p": {
            opacity: 1,
          },
        },
        position: "relative",
        marginBottom: theme.spacing(2),
      },
      imageContainer: {
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      },
      image: {
        width: "100%",
        height: "auto",
        filter: `invert(${
          invert && theme.palette.type === "dark" ? "100%" : "0%"
        })`,
        [theme.breakpoints.up("sm")]: {
          width: "80%",
        },
      },
      // label: {
      //   position: "relative",
      //   opacity: 0,
      //   whiteSpace: "nowrap",
      //   zIndex: 10,
      //   [theme.breakpoints.up("sm")]: {
      //     marginTop: theme.spacing(1),
      //   },
      // },
      label2: {
        position: "absolute",
        whiteSpace: "nowrap",
        bottom: -theme.spacing(5),
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
          <img
            className={classes.image}
            width={100}
            height={100}
            src={logo}
            alt={label}
          />
        </a.div>
        {/* <Typography
          align="center"
          className={classes.label}
          gutterBottom={false}
        >
          {label}
        </Typography> */}
        <Typography
          align="center"
          className={classes.label2}
          gutterBottom={false}
        >
          {label}
        </Typography>
      </Box>
    </>
  );
}

export default Chip;
