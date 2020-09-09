import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Parrot from './parrots';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    marginLeft:"6%",
    marginRight:"6%",
    marginTop: "10%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor:"#eeeeee",
    height:"100%",
  },
}));

export default function AvailableList() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Parrot" {...a11yProps(0)} style={{fontSize:"120%"}}/>
        <Tab label="Dog" {...a11yProps(1)} style={{marginTop:5,fontSize:"120%"}} />
        <Tab label="Cat" {...a11yProps(2)} style={{marginTop:5,fontSize:"120%"}}/>
        <Tab label="Rabbit" {...a11yProps(3)} style={{marginTop:5,fontSize:"120%"}}/>
        <Tab label="Five" {...a11yProps(4)} style={{marginTop:5,fontSize:"120%"}}/>
        <Tab label="Six" {...a11yProps(5)} style={{marginTop:5,fontSize:"120%"}}/>
        <Tab label="Seven" {...a11yProps(6)} style={{marginTop:5,fontSize:"120%"}}/>
      </Tabs>
      <TabPanel  value={value} index={0}>
        <Parrot/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Parrot/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       <Parrot/>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Parrot/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Parrot/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Parrot/>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Parrot/>
      </TabPanel>
    </div>
  );
}
