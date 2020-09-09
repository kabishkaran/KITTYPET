import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(grey[500]),
      backgroundColor: grey[600],
      '&:hover': {
        backgroundColor: grey[800],
      },
    },
  }))(Button);

const style={
      root1:{
        marginTop:"50%",
        backgroundColor:'white',
        border: 'solid black',
        borderRadius: 20
      }
    
}

class Signup extends Component {
    state = {
        email: '',
        username:'',
        password:'',
        confirmpassword:'',
    }
    
    handleChange = (event) => {
        const email = event.target.value;
        this.setState({ email });
    }
    handleChangeUn = (event) => {
        const username = event.target.value;
        this.setState({ username });
    }
    handleChangePa = (event) => {
        const password = event.target.value;
        this.setState({ password });
    }
    handleChangeConPa = (event) => {
      const confirmpassword = event.target.value;
      this.setState({ confirmpassword });
  }
    
    handleSubmit = () => {
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isPassword', (value) => 
        {
            
            if ( value.length<6) {
                return false;
            }
            else if (value.length>40) {
                return false;
            }
            return true;
        });
        ValidatorForm.addValidationRule('isUsername', (value) => 
        {
            
            if ( value.length<6) {
                return false;
            }
           else if (value.length>40) {
                return false;
            }
            return true;
        });
        ValidatorForm.addValidationRule('isPasswordsame', (value) => 
        {
            
            if ( value !== this.state.password) {
                return false;
            }
            if ( value.length<6) {
              return false;
          }
           else if (value.length>20) {
                return false;
            }
            return true;
        });
    }
    handleSignup=(e)=>{
        e.preventDefault();
    
        if (this.state.username && this.state.email && this.state.password) {
            console.log(this.state.username + " " + this.state.password + " " + this.state.email)
            this.setState({
              successful: true,
              message: "USER REGISTERED SUCCESSFULLY!"
            })
          }}
  constructor(props){
      super(props);
      

}


render(){
    const { email,username,password,confirmpassword } = this.state;
    return(
        <>
          <Grid container>
        <Grid item xs/>
        <Grid item xs={3}>
        <Card style={style.root1} >
                    <CardContent>
                    <ValidatorForm
                ref="form"
                onError={errors => console.log(errors)}
                 onSubmit={this.handleSignup}  >
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                    <h2 style={{color:'brown'}}><strong>SIGN UP</strong></h2><br/>
                                        <FormControl fullWidth>
                                        <TextValidator
                                             variant="filled"
                                             label="Fullname"
                                             onChange={this.handleChangeUn}
                                            name="username"
                                             value={username}
                                             validators={['required','isUsername']}
                                             errorMessages={['This field is required!!', 'The username must be 6 and 20 characters!!']}
                                             helperText="Enter Full Name"
                                        />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                        <TextValidator
                                             variant="filled"
                                             label="Email"
                                             onChange={this.handleChange}
                                            name="email"
                                             value={email}
                                             validators={['required', 'isEmail']}
                                             errorMessages={['This field is required!', 'invalid email address!']}
                                             helperText="Enter email"
                                        />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                        <TextValidator
                                            type="password"
                                             variant="filled"
                                             label="password"
                                             onChange={this.handleChangePa}
                                             name="password"
                                             value={password}
                                             validators={['required', 'isPassword']}
                                             errorMessages={['This field is required!', 'Invalid password!']}
                                             helperText="Enter password"
                                        />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                        <TextValidator
                                            type="password"
                                             variant="filled"
                                             label="confirm password"
                                             onChange={this.handleChangeConPa}
                                             name="password"
                                             value={confirmpassword}
                                             validators={['required', 'isPasswordsame']}
                                             errorMessages={['This field is required!', 'Please confirm the password']}
                                             helperText="Confirm password"
                                        />
                                        </FormControl>
                                    </Grid>
                        <Grid item xs={12}>
                        <FormControl>
                        <ColorButton type="submit" fullWidth variant="contained" color="primary">
                            Sign Up
                        </ColorButton>
                        </FormControl>
                      </Grid>
                      </Grid><br/>
                      <center>-----Already have an account?-----<br/>
                      <a href="/login">
                            Sign in</a>
                            </center>
                      
                </ValidatorForm>
                
              </CardContent>
              </Card>
              </Grid>
              <Grid item xs/>
              </Grid> 
   </>);
  }
}

export default Signup
