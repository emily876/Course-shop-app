import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { bannerData } from '../constants/data';
import { makeStyles } from '@material-ui/core';

const useStyle= makeStyles(theme =>({
    image:{
        width:'100%',
        height:600,
        [theme.breakpoints.down('sm')]:{
            objectFit:'fill',
            height:400,
        }
    },
    banner:{
        [theme.breakpoints.down('sm')]:{
            marginTop:25
        }
    }
}))

const Banner = () => {
    const classes =useStyle();

    return (
        <Carousel className={classes.banner}
           autoPlay={true}
           animation ='slide' 
           indicators={false}
           navButtonsAlwaysVisible={true}
           cycleNavigation={true}
           navButtonsProps={{
               style:{
                   background:'#FFFFFF',
                   color:'#494949',
                   borderRadius:0,
                   margin:0,
               }
           }}
        >
            {
            bannerData.map( image =>  (
                <img src={image} className={classes.image}/>
            ))
            } 
        </Carousel>
    )
}

export default Banner;
