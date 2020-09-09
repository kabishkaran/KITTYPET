import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import { Grid } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';


const useStyles=makeStyles({
    appBar:{
        top:'auto',
        bottom:'0',
        backgroundColor:'#424242',
        color:'black',
        marginTop:150,
    },
});

function Footer(){
    const classes=useStyles();
    let fullYear=new Date().getFullYear();

    return(
        <>
        <AppBar position="static" className={classes.appBar}>
        <Grid container spacing={1} style={{color:"white"}}>
            <Grid item xs={1}/>
            <Grid item xs={3} style={{marginTop:20}}>
                        <h4>Contact us</h4>
                        <MailIcon></MailIcon>&nbsp;kittypet12@gmail.com<br/>
                        <PhoneIcon></PhoneIcon>&nbsp;077xxxxxxx
            </Grid>
            <Grid item xs={4}/>
            <Grid item xs={4} style={{marginTop:20}}>
                <h4 >Our Services</h4>
                <p>Providing selling and buying pets,
                     and All-in-one petcare solution,
                      linking supermarkets and pet care product stores with our platform to buy required products
                     , connect the vendor’s pet care doctor and pharmacy to our platform to get the medical needs</p>
            </Grid>

        </Grid>
            <Typography variant="overline" align="center" style={{color:"white"}}>
                {fullYear}-{fullYear+1},ALL RIGHTS RESERVED BY @KITTYPET
            </Typography>
        </AppBar>
        </>
    )
}
export default Footer