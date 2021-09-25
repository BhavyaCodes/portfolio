import { memo } from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import Chip from "./Chip";

import { StackType } from "lib/projects";

type appProps = {
  stack: StackType[];
};

function TechChips({ stack }: appProps) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        marginBottom: theme.spacing(3),
      },
    })
  );
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      style={{ maxWidth: "100%" }}
      className={classes.root}
    >
      {stack.map((obj) => (
        <Grid key={obj.label} item xs={2} md={2}>
          <Chip label={obj.label} logo={obj.logo} invert={obj.invert} />
        </Grid>
      ))}
    </Grid>
  );
}

export default memo(TechChips, () => true);
