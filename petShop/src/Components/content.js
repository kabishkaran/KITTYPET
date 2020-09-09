import React from "react";
import { Grid } from "@material-ui/core";
import MedCard from "./MedCard";
import constants2 from "./constants2";

const Content = () => {
  const petMakerCard = (petMakerObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <MedCard {...petMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={3}>
      {constants2.map((petMakerObj) => petMakerCard(petMakerObj))}
    </Grid>
  );
};

export default Content;