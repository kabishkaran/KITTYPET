import React,{Component} from 'react';
import { Grid, Box } from '@material-ui/core';

class About extends Component{

    render(){
        return(
            <>
            <Grid container  style={{marginTop:"12%",}}>
                <Grid item xs={2}/>
                <Grid item xs={8} style={{backgroundColor:'#f3e5f5',}}>
                    <Box style={{textAlign:'center'}}>
                    <h1>About</h1>
                    </Box>

                    <Box style={{textAlign:'center', marginTop:50}}>
                    <img src="https://image.freepik.com/free-vector/pet-shop-care-simple-logo_54548-156.jpg" height="100" width="400" alt="logo" />
                    </Box>

                    <Box m={7}>
                        <p>Currently people like to breed pets to their personal favours.
                             Same time they have struggled in adopting a pet according to the official
                              procedure and the pet breeding, marketing industry has grown exponentially.
                               Here we are inroducing <strong>Our App</strong> which will completely provide you with all the things you want through animal care.
                                The Special thing is Customers can conduct the pet sellers via online and buy their favourite one.
                                 Also we're providing the platform for their food and medical care.</p>
                    </Box>

                </Grid>
                <Grid item xs={2}/>
            </Grid>
            </>
        )
    }
}
export default About;