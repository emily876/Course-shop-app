import React from 'react';
import Carousel from "react-multi-carousel";
import {useDispatch} from 'react-redux'
import "react-multi-carousel/lib/styles.css";
import {makeStyles,Box, Typography, Button, Divider} from '@material-ui/core';
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom';
// import * as productActions from '../../redux/actions/productActions'
import { products } from '../constants/data.js';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const useStyle =makeStyles(theme=>({
    component:{
        marginTop:12,
        background:'#ffffff',
    },
    deal:{
        padding:'15px 20px',
        display:'flex'
    },
    dealText:{
        fontSize:22,
        fontWeight:600,
        lineHeight:'32px',
        marginRight:25
    },
    timer:{
        color:'#7f7f7f',
        marginLeft:10,
        display:'flex',
        alignItems:'center',
    },
    button:{
        marginLeft:'auto',
        borderRadius:2,
        fontSize:13,
    },
    image:{
        height:150,
    },
    text:{
        fontSize:14,
        marginTop:5,
        textDecoration:'none'
    },
    wrapper:{
        padding:'35px 15px',
        cursor:'pointer'
    },
    buttons:{
        marginTop:30,
        padding:10,
        [theme.breakpoints.down('sm')]:{
            display:'flex',
            // padding:-20
        }
    },
    redbtn:{
        marginLeft:-60,
        fontSize:12,
        [theme.breakpoints.down('sm')]:{
            // marginLeft:10,
            marginTop:-40,
            // marginBottom:5
        }
    },
    bluebtn:{
        marginRight:-20,
        fontSize:12,
        [theme.breakpoints.down('sm')]:{
            marginTop:25,
            marginLeft:-40,
            height:33
        }
    }
    
}));

const Slide = (products) => {
    // let dispatch = useDispatch()
    const classes =useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds}) => {
          return <span className={classes.timer}>{hours} : {minutes} : {seconds} Left</span>;
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealText}>Special offers on all courses</Typography>
                <img src={timerURL} style={{width:24}}/>
                <Countdown date={Date.now() + 3.96e+7} renderer={renderer}/>
                <Button variant="contained" color="secondary" className={classes.button}><a style={{textDecoration:'none',color:'white'}} href="#courselist">View all</a></Button>
            </Box>
            <Divider />
            <Carousel
                responsive ={responsive}
                infinite={true}
                draggable={false}
                swipeable={false}
                autoPlay={true}
                autoPlaySpeed={10000}
                keyBoardControl={true}
                showDots={false}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >  
            {
                products.products.map(product=>(
                    <a to={`products/${product._id}`} >
                        <Box textAlign="center" className={classes.wrapper} 
                        // onClick={clickProduct.bind(this,product._id)}
                        >
                            <img src={product.url} className={classes.image} />
                            <Typography className={classes.text} style={{fontWeight:600,color:'#212121'}}>{product.title.longTitle}</Typography>
                            <Typography className={classes.text} style={{color:'green', display:'inline',marginLeft:-100}}>{product.discount}</Typography>
                            <Typography className={classes.text} style={{color:'#212121', opacity:'.6',marginTop:-21,marginLeft:120}}>{product.tagline}</Typography>
                            <Box className={classes.buttons}>
                                <span style={{padding:50}}>
                                <Button className={classes.redbtn} variant='outlined' color="secondary"><a style={{textDecoration:'none',color:'red'}} href={`/${product.id}`} >Details</a></Button>
                                </span>
                                <Button className={classes.bluebtn} variant='outlined' color="primary" ><a style={{textDecoration:'none',color:'blue'}} href={`/${product.id}`} >Buy course</a></Button>
                            </Box>
                        </Box>
                    </a>
                ))
            }
            </Carousel>
        </Box>
    )
}

export default Slide;
