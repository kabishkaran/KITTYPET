// import React,{Component} from 'react';
// import Content from './content';

// import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import Doctors from "./Doctors";
// import Pharmacy from "./pharmacy";
// import { Grid } from "@material-ui/core";
// import TabsWrappedLabel from './SideTabBar';

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`vertical-tabpanel-${index}`}
//       aria-labelledby={`vertical-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired
// };

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`
//   };
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//     display: "flex",
//     height: 800
//   },
//   tabs: {
//     borderRight: `1px solid ${theme.palette.divider}`
//   }
// }));

// export default function Clinic() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <div className={classes.root}>
//     <Grid item container>
//         <Grid item xs={false} sm={2}>
//         <Tabs
//         orientation="vertical"
//         variant="fullWidth"
//         value={value}
//         onChange={handleChange}
//         aria-label="Vertical tabs example"
//         className={classes.tabs}
//       >
//         <Tab label="Dog" {...a11yProps(0)} />
//         <Tab label="Parrot" {...a11yProps(1)} />
//         <Tab label="Poultry" {...a11yProps(2)} />
//         <Tab label="Fish" {...a11yProps(3)} />
//         <Tab label="sheep" {...a11yProps(4)} />
//         <Tab label="cows" {...a11yProps(5)} />
//         <Tab label="Rabbit" {...a11yProps(6)} />
//         <Tab label="Pigeo" {...a11yProps(7)} />
//         <Tab label="hen" {...a11yProps(8)} />
//         <Tab label="Diabetes & Insulin" {...a11yProps(9)} />
//         <Tab label="Digestive Tract, Liver & Pancr" {...a11yProps(10)} />
//         <Tab label="Ear Medications" {...a11yProps(11)} />
//         <Tab label="Epilepsy & Seizure" {...a11yProps(12)} />
//         <Tab label="Estrus & Luteolytic" {...a11yProps(13)} />
//         <Tab label="Eye Medications " {...a11yProps(14)} />
//         <Tab label="Flea & Tick" {...a11yProps(15)} />
//       </Tabs>

//         </Grid>
//         <Grid item xs={12} sm={8}>
//           <TabPanel value={value} index={0}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={5}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={6}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={7}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={8}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={9}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={10}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={11}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={12}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={13}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={14}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//       <TabPanel value={value} index={15}>
//         <TabsWrappedLabel/>
//       </TabPanel>
//         </Grid>
//       </Grid>
      
      
//     </div>
//   );
// }
