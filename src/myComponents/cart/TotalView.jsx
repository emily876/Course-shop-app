import { useState, useEffect } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyle = makeStyles({
    component: {
        // width: '30%'
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    },
    greyTextColor: {
        color: '#878787'
    },
    container: {
        '& > *': {
            marginBottom: 20,
            fontSize: 14
        }
    },
    price: {
        float: 'right'
    },
    totalAmount: {
        fontSize: 18,
        fontWeight: 600,
        borderTop: '1px dashed #e0e0e0',
        padding: '20px 0',
        borderBottom: '1px dashed #e0e0e0'
    }
})


const TotalView = () => {
    const classes = useStyle();

    return (
        <Box className={classes.component}>
            <Box className={classes.header} style={{borderBottom: '1px solid #f0f0f0'}}>
                <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
            </Box>
            <Box className={clsx(classes.header, classes.container)}>
                <Typography>Price (2 items)<span className={classes.price}>₹12,250</span></Typography>
                <Typography>Discount<span className={classes.price}>-₹5,365</span></Typography>
                <Typography className={classes.totalAmount}>Total Amount<span className={classes.price}>₹6,885</span></Typography>
                <Typography style={{fontSize: 16, color: 'green'}}>You will save 43.8% on this order</Typography>
            </Box>
        </Box>
    )
}

export default TotalView;