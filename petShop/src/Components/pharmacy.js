import React from "react";
import { Grid } from "@material-ui/core";
import Content from "./content";

function Pharmacy() {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={false} sm={0.5} />
        <Grid item xs={12} sm={11}>
          <Content />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Pharmacy;