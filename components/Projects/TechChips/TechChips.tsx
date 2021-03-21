import { Grid } from "@material-ui/core";
import Chip from "./Chip";

type appProps = {
  stack?: {
    label: string;
    logo: string;
  }[];
};

function TechChips({ stack }: appProps) {
  return (
    <Grid container spacing={2} style={{ maxWidth: "100%" }}>
      {stack!.map((obj) => (
        <Grid item xs={2} md={1}>
          <Chip label={obj.label} logo={obj.logo} />
        </Grid>
      ))}
    </Grid>
  );
}

export default TechChips;
