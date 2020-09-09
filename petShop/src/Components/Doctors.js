import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import CallIcon from '@material-ui/icons/Call';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.vetrecordjobs.com/getasset/da364660-e178-4ca7-bccf-47f5ee5716ee/')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function Doctors() {
  const classes = useStyles();
  
  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary" >
            Our number one priority is to provide compassionate quality veterinary care for your pet...
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>Welcome to Kitty Pet Doctors...!</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Doctors' details...
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dr (Mrs) R.Ratugampala (B.V.Sc) Sri Lanka
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Animal Clinic and Surgery - Pasyala
                    Kandy Road, Pasyala
                    Animal Clinic and Surgery - Maduwegedara
                    Attanagalla Road, Maduwegedara
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Veterinary Surgeon
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Tel: - 011 - 2958128
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <CallIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dr K.H.D Chandani (B.V.Sc/M.V.Sc) Sri Lanka
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Government Veterinary Surgeon - Valachchena
                    Pet Care
                    Negombo Road, Temple Junction, Devalapola

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Veterinary Surgeon
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                     Tel : - 077 – 6616827
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <CallIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dr Chandana Jayawardana (B.V.Sc) Sri Lanka
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    LMy Pet Animal Clinic and Surgery, Negombo Road, Kandana, (Opposite Sampath Bank)
                    Veterinary Mobile Services On Request(Colombo,Wattala,Ragama,Ja,Ela,Seeduwa,Negombo and Gampaha)
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Pet Care Animal Hospital
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Tel :- 077-6513600
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <CallIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dr S.K. Kolonnage B.V.Sc (Hons) Sri Lanka
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    LMy Pet Animal Clinic and Surgery, Negombo Road, Kandana, (Opposite Sampath Bank)
                    Veterinary Mobile Services On Request
                    Pet Care, Kandy Road, Belummahara
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2rB-ytWmZyNGqB7HPMz2DGAyDQEeOgxH_0g&usqp=CAU" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Veterinary Surgeon
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Tel: - 071-8403846
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <CallIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dr (Mrs) C.Wickramaarachchi. (B.V.Sc) Sri Lanka
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                   Asiri Animal Clinic & Surgery
                   No: 04, Arther Field Shopping Complex, Hospital Road, Avissawella.
                   </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="data:image/jpeg;base64,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" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Government Veterinary Surgeon - Ahaliyagoda
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Tel: 0777-286289
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <CallIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Dr Chamara M.M.A (B.V.Sc) Sri Lanka
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Government Veterinary Surgeon - Valachchena
                    Pet Care
                    Negombo Road, Temple Junction, Devalapola

                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Veterinary Surgeon
                    </Typography>
                    <Typography variant="subtitle2" color="textSecondary" component="p">
                      Tel: - 071-8403846
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <CallIcon />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default Doctors;