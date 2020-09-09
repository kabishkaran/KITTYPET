import React, { Component } from 'react'

import { Card, CardContent, Grid, FormControl, Link, withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
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

const style = {
  root1:{
    marginTop:"50%",
    backgroundColor:'white',
    border: 'solid black',
    borderRadius: 20
  }
}

 class login extends Component {
  state = {
    email: '',
    password:'',
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
}

handleChange = (event) => {
    const email = event.target.value;
    this.setState({ email });
}

handleSubmit = () => {
    // your submit logic
}

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    const { email } = this.state;
    return (
      <>
          <Grid container>
        <Grid item xs/>
        <Grid item xs={3}>
        <Card style={style.root1}>
              <CardContent>
                <ValidatorForm
                ref="form"
                onError={errors => console.log(errors)}>
                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                      <h2 style={{color:'brown'}}><strong>LOGIN</strong></h2><br></br>
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
                          validators={['required', 'isPassword']}
                          errorMessages={['This field is required!','Invalid password!']}
                          variant="filled" helperText="Enter password" label="password" type="password" name="password" value={this.state.password}
                            onChange={this.onChangePassword}/>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                        <ColorButton type="submit" fullWidth variant="contained" color="primary">
                           <span style={{color:"white"}}> LOGIN </span>
                        </ColorButton><br/>
                        <Link href="/ForgotPassword"> Forgot password?</Link>
                        </FormControl><br/><br/>
                        <center>-----Do not you have an account?-----<br/>
                        <FormControl>
                        <a href="/signup">
                            Sign up
                            </a>
                        </FormControl>
                        </center>
                      </Grid>
                  </Grid>
                </ValidatorForm>
              </CardContent>
              </Card>
              </Grid>
              <Grid item xs/>
              </Grid>
    </>);
  }
}
export default login