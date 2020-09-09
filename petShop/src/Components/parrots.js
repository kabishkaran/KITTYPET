import React from "react";
import { Grid } from "@material-ui/core";
import PetCard from "./petCard";
import constants from "./constants";

const Parrot = () => {
  const petMakerCard = (petMakerObj) => {
    return (
      <Grid item xs={12} sm={4}>
        <PetCard {...petMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={5} style={{marginTop:1,marginLeft:"5%",maxWidth:"90%"}}>
      {constants.map((petMakerObj) => petMakerCard(petMakerObj))}
    </Grid>
  );
};

export default Parrot;