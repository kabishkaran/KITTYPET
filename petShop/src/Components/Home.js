import React, { Component, Fragment } from 'react'
import ReactSimpleCarousel from "react-plain-carousel";
import { Grid,Tab,Tabs, Card, Box, CardMedia, CardActionArea,Button,Typography,CardContent,CardActions, Link, Paper } from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';


class Home extends Component{

    state = {
        carousel: {},
        index: 0
      };
    
      render() {
        return (
          <Fragment>
            <div >
            <div style={{marginRight:"6%",marginLeft:"6%",marginTop:"10%"}}>
              <Grid container spacing={1} style={{marginTop:2}}>
                  <Grid item xs={4}>
                  <Fragment>
              <ReactSimpleCarousel isInfinity autoplay className="carousel">
                <img src="https://i.pinimg.com/originals/a2/e6/fb/a2e6fba281369609e778c131edc2904c.jpg" alt="pets" height="400"/>
                <img src="https://live.staticflickr.com/3036/3033898918_33238aca22_b.jpg" alt="pets" height="400"/>
                <img src="https://i.insider.com/5cf56539594ea5383d3a001a?width=1100&format=jpeg&auto=webp" alt="pets" height="400"/>
                <img src="https://www.kapparesort.com/wp-content/uploads/2016/01/pets.jpg" alt="pets" height="400"/>
                <img src="https://magarticles.magzter.com/articles/5168/206730/5891861acfd4e/Oh-for-the-wings-of-a-dove.jpg" alt="pets" height="400"/>
              </ReactSimpleCarousel>
            </Fragment>
            </Grid>
                  <Grid item xs={4}>
            <Fragment>
              <ReactSimpleCarousel isInfinity autoplay className="carousel">
              <img src="https://live.staticflickr.com/3036/3033898918_33238aca22_b.jpg" alt="pets" height="400"/>
              <img src="https://i.insider.com/5cf56539594ea5383d3a001a?width=1100&format=jpeg&auto=webp" alt="pets" height="400"/>
              <img src="https://www.kapparesort.com/wp-content/uploads/2016/01/pets.jpg" alt="pets" height="400"/>
              <img src="https://magarticles.magzter.com/articles/5168/206730/5891861acfd4e/Oh-for-the-wings-of-a-dove.jpg" alt="pets" height="400"/>
              <img src="https://i.pinimg.com/originals/a2/e6/fb/a2e6fba281369609e778c131edc2904c.jpg" alt="pets" height="400"/>
              </ReactSimpleCarousel>
            </Fragment>
            </Grid>
            <Grid item xs={4}>
            <Fragment>
              <ReactSimpleCarousel isInfinity autoplay className="carousel">
              <img src="https://i.insider.com/5cf56539594ea5383d3a001a?width=1100&format=jpeg&auto=webp" alt="pets" height="400"/>
              <img src="https://www.kapparesort.com/wp-content/uploads/2016/01/pets.jpg" alt="pets" height="400"/>
              <img src="https://magarticles.magzter.com/articles/5168/206730/5891861acfd4e/Oh-for-the-wings-of-a-dove.jpg" alt="pets" height="400"/>
              <img src="https://i.pinimg.com/originals/a2/e6/fb/a2e6fba281369609e778c131edc2904c.jpg" alt="pets" height="400"/>
              <img src="https://live.staticflickr.com/3036/3033898918_33238aca22_b.jpg" alt="pets" height="400"/>
              </ReactSimpleCarousel>
            </Fragment>
            </Grid>
            </Grid>
            </div>
          

          <div style={{marginLeft:250}}>
          <div style={{marginTop:100}}>
            <strong><span style={{fontSize:50}}>Pets</span></strong><span style={{marginLeft:80,fontSize:30}}><Link style={{color:"#9e9e9e"}} href="/AvailableList"> See all<ArrowRightAltIcon style={{fontSize:100}}/></Link></span>
            </div>
          <Grid container>
            <Card style={{borderRadius:'100%',maxWidth:200,maxHeight:200}}><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*" height="200" width="200" /></Card>
            <Card style={{borderRadius:'100%',maxWidth:200,maxHeight:200,marginLeft:30}}><img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg" height="200" width="200" /></Card>
            <Card style={{borderRadius:'100%',maxWidth:200,maxHeight:200,marginLeft:30}}><Link href="/Parrots"><img src="https://images.theconversation.com/files/86375/original/image-20150625-12984-1416ek3.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" height="200" width="200" /></Link></Card>
            <Card style={{borderRadius:'100%',maxWidth:200,maxHeight:200,marginLeft:30}}><img src="https://media.npr.org/assets/img/2017/09/14/gettyimages-10141026_slide-67be9fc1bca330b26debade87690b5e84286614d-s800-c85.jpg" height="200" width="200" /></Card>
            <Card style={{borderRadius:'100%',maxWidth:200,maxHeight:200,marginLeft:30}}><img src="https://media.npr.org/assets/img/2017/09/14/gettyimages-10141026_slide-67be9fc1bca330b26debade87690b5e84286614d-s800-c85.jpg" height="200" width="200" /></Card>
            </Grid>


            <div style={{marginTop:100}}>
            <strong><span style={{fontSize:50}}>Clinic</span></strong><span style={{marginLeft:80,fontSize:30}}><Link style={{color:"#9e9e9e"}} href="/AvailableList"> See all<ArrowRightAltIcon style={{fontSize:100}}/></Link></span>
            </div>
          <Grid container>
            <Card style={{borderRadius:'100%',maxWidth:200,maxHeight:200}}><img src="https://dr121.com/assets/img/docnk.jpg" height="200" width="200" /></Card>
            <Card style={{borderRadius:'100%',maxWidth:200,maxHeight:200,marginLeft:30}}><img src="https://cdn.sanity.io/images/0vv8moc6/drugtopics/362378764ff70708dc8f284d9057f85ab52a88ec-1000x667.png" height="200" width="200" /></Card>
            </Grid>
            </div>
            </div>
          </Fragment>
        );
      }
    }
export default Home;