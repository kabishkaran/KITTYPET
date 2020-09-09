import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import ShareIcon from "@material-ui/icons/Share";
import { Avatar, IconButton, CardMedia, Typography } from "@material-ui/core";
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import Detail from "./detail";


const PetCard = (props) => {
  const { title, imageUrl,price,phoneNumber } = props;
  return (
    <Card style={{backgroundColor:"#eeeeee"}} >
      <CardHeader
        title={title}
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
      />
      <CardMedia  style={{ height:200, }} image={imageUrl} />
      <CardContent>
      <strong> Price:</strong><span style={{fontSize:25,color:'#ff3d00'}}>{price}<br/></span>
       <strong> Contact Owner:</strong><span style={{fontSize:20}}>{phoneNumber}</span>
      </CardContent>
      <div>
      </div>
    </Card>
  );
};

export default PetCard;