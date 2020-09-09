import React,{Component} from 'react';
import { Grid, Card, CardContent, Button, } from '@material-ui/core';
import { purple,grey } from '@material-ui/core/colors';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { FaUsers,FaUserMd,FaPaw,FaClinicMedical,FaUtensils,FaShoppingCart } from "react-icons/fa";



const theme = createMuiTheme({
    palette: {
      primary: grey,
    },
  });

const style={
    root: {
        backgroundColor:'#424242',
        marginTop: 37,
        align:'center',
        color:'white',
        height:300,
        borderRadius:30,
        marginRight:10,
        marginLeft:5
        
      },
      root1: {
        backgroundColor:'#424242',
        marginBottom:30,
        marginTop: 4,
        align:'center',
        color:'white',
        height:300,
        borderRadius:30,
        marginRight:8,
        marginLeft:5
        
      },
      root2:{
          backgroundColor:'#8d6e63',
          borderRadius:30,
          marginTop:15,
      },
      icons:{
            width:300,
      },
      root3:{
          textAlign:'center'
      }
    }

class Admin extends Component{
    render(){
         return(

        <>
        <Grid container>
        <Grid item xs/>
        <Grid item xs={10}>
            <Card style={{backgroundColor:'#5d4037',marginTop:"12%",textAlign:'center',borderRadius:10}}>
                    <h1>Admin Panel</h1>
            </Card>
        </Grid>
        <Grid item xs/>
        </Grid>
        <Grid container>
        <Grid item xs/>
        <Grid item xs={10}>
        <Card style={style.root2}>
        <Grid container spacing={3}>
        <Grid item xs/>
            <Grid item xs={3}>
                <Card style={style.root}>
                    <CardContent>
                        <div style={style.root3}><h3 style={{color:'black'}}>USER</h3></div>
                        <FaUsers size='170' style={style.icons}/>
                        <div>
                        <ThemeProvider theme={theme}>
                        <Button style={{width:150}} color="primary" variant="contained">Add User</Button>&nbsp;&nbsp;
                        <Button style={{width:150}} color="primary" variant="contained">View User</Button>
                        </ThemeProvider>
                        </div>
                    </CardContent>
                </Card>
            </Grid>



            <Grid item xs={3}>
            <Card style={style.root}>
            <CardContent>
                        <div style={style.root3}><h3 style={{color:'black'}}>PETS</h3></div>
                        <FaPaw size='170' style={style.icons}/>
                        <div>
                        <ThemeProvider theme={theme}>
                        <Button style={{width:150}} color="primary" variant="contained">Requests</Button>&nbsp;&nbsp;
                        <Button style={{width:150}} color="primary" variant="contained">View Pets</Button>
                        </ThemeProvider>
                        </div>
                    </CardContent>
                </Card>
            </Grid>




            <Grid item xs={3}>
            <Card style={style.root}>
            <CardContent>
                        <div style={style.root3}><h3 style={{color:'black'}}>DOCTOR</h3></div>
                        <FaUserMd size='160' style={style.icons}/>
                        <div style={{marginTop:10}}>
                        <ThemeProvider theme={theme}>
                        <Button style={{width:150}} color="primary" variant="contained">Add Doctor</Button>&nbsp;&nbsp;
                        <Button style={{width:150}} color="primary" variant="contained">View Doctor</Button>
                        </ThemeProvider>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs/>
            </Grid>

            
            <Grid container spacing={1}>
            <Grid item xs/>
            <Grid item xs={3}>
                <Card style={style.root1}>
                <CardContent>
                        <div style={style.root3}><h3 style={{color:'black'}}>PHARMACY</h3></div>
                        <FaClinicMedical size='160' style={style.icons}/>
                        <div style={{marginTop:10}}>
                        <ThemeProvider theme={theme}>
                        <Button style={{width:150}} color="primary" variant="contained">Add Medicine</Button>&nbsp;&nbsp;
                        <Button style={{width:150}} color="primary" variant="contained">View Medicine</Button>
                        </ThemeProvider>
                        </div>
                    </CardContent>
                </Card>
            </Grid>



            <Grid item xs={3}>
            <Card style={style.root1}>
            <CardContent>
                        <div style={style.root3}><h3 style={{color:'black'}}>FOOD</h3></div>
                        <FaUtensils size='160' style={style.icons}/>
                        <div style={{marginTop:10}}>
                        <ThemeProvider theme={theme}>
                        <Button style={{width:150}} color="primary" variant="contained">Add Food</Button>&nbsp;&nbsp;
                        <Button style={{width:150}} color="primary" variant="contained">View Food</Button>
                        </ThemeProvider>
                        </div>
                    </CardContent>
                </Card>
            </Grid>




            <Grid item xs={3}>
            <Card style={style.root1}>
            <CardContent>
                        <div style={style.root3}><h3 style={{color:'black'}}>Buy Things</h3></div>
                        <FaShoppingCart size='160' style={style.icons}/>
                        <div style={{marginTop:10}}>
                        <ThemeProvider theme={theme}>
                        <Button style={{width:150}} color="primary" variant="contained">Add Things</Button>&nbsp;&nbsp;
                        <Button style={{width:150}} color="primary" variant="contained">View Things</Button>
                        </ThemeProvider>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs/>
            </Grid>
        </Card>
        </Grid>
        <Grid item xs/>
        </Grid>






        </>
    );
    }
}
export default Admin