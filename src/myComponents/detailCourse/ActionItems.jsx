import React from 'react';
import { Button,Box,makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import {ShoppingCart , FlashOn} from '@material-ui/icons';

const useStyle = makeStyles(theme =>({
    leftContainer:{
        padding:'10px 10px 0 20px',
        [theme.breakpoints.down('md')]:{
            padding:'20px 40px'
        }
    },
    button:{
        height:50,
        width:'45%',
        borderRadius:2
    },
    addToCart:{
        background:'#ff9f00',
        color:'#fff',
        marginRight:10,
        [theme.breakpoints.down('md')]:{
            marginLeft:-40
        }
    },
    buyNow:{
        background:'#fb641b',
        color:'#fff',
    }
}));

const ActionItems = () => {
    const classes = useStyle();
    
    return (
        <Box className={classes.leftContainer}>
            <Button  variant="contained" className={clsx(classes.button,classes.addToCart)}><ShoppingCart />&nbsp;Add to Cart</Button> 
            <Button  variant="contained" className={clsx(classes.button,classes.buyNow)}><FlashOn/>Buy Now</Button>
        </Box>
    )
}

export default ActionItems;