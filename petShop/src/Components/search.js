import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Pets } from '@material-ui/icons';
import Clinic from './Clinic';
import Food from './Food';
import { TextField, Button,Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

export default function Search() {
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <Box border={1} style={{marginRight:"10%",borderColor:"grey"}}>
      <input style={{width:"60%",height:55}} variant="outlined"></input>
      <FormControl fullWidth style={{width:"30%"}} variant="outlined">
        <Select
        native
          value={state.age}
          onChange={handleChange}
          name="age"
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value="">All</option>
          <option value={1}>Pets</option>
          <option value={2}>Clinic</option>
          <option value={3}>Food</option>
        </Select>
      </FormControl>
      <Button>
      <SearchIcon style={{fontSize:40}}/>
      </Button>
      </Box>
    </div>
  );
}
