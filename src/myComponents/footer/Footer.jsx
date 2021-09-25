import {Typography,makeStyles,Grid,Box} from '@material-ui/core'
import React from 'react';

const useStyle = makeStyles(theme=>({
    component: {
        background: '#28282B'
    },
    footertxt: {
        fontSize: 30,
        fontWeight: 600,
        color:'white',
        marginLeft:50,
        marginBottom:20,
        [theme.breakpoints.down('sm')]:{
            marginTop:-30,
            marginLeft:25
        }
    },
    txt:{
        color:'white',
        lineHeight:2.5,
        [theme.breakpoints.down('sm')]:{
            marginTop:-10,
            marginRight:-25
        }
    },
    cpright:{
        color:'white',
        marginRight:20,
        [theme.breakpoints.down('sm')]:{
            marginTop:-20,
        }
    }
}));

const Footer = () => {
    const classes = useStyle();

    return (
        <Box className={classes.component}>
            <Grid item xs={12}>
                <Box style={{display:'flex', justifyContent:'flex-start'}}>
                    <Box style={{margin:50,paddingRight:40}}>
                        <Typography className={classes.txt}>ShopLine Business</Typography>
                        <Typography className={classes.txt}>Teach on ShopLine</Typography>
                        <Typography className={classes.txt}>Get the app</Typography>
                        <Typography className={classes.txt}>About us</Typography>
                        <Typography className={classes.txt}>Contact us</Typography>
                    </Box>
                    <Box style={{margin:50,paddingRight:40}}>
                        <Typography className={classes.txt}>Careers</Typography>
                        <Typography className={classes.txt}>Blog</Typography>
                        <Typography className={classes.txt}>Help and support</Typography>
                        <Typography className={classes.txt}>Affiliate</Typography>
                    </Box>
                    <Box style={{margin:50,paddingRight:40}}>
                        <Typography className={classes.txt}>Terms</Typography>
                        <Typography className={classes.txt}>Privacy policy</Typography>
                        <Typography className={classes.txt}>Sitemap</Typography>
                    </Box>
                </Box>
            <Box style={{display:'flex', justifyContent:'space-between'}}>
            <Typography className={classes.footertxt}>ShopLine</Typography>
            <Typography className={classes.cpright}>Copyright ©2021 All rights reserved</Typography>
            </Box>
            </Grid>
        </Box>
    )
}

export default Footer;
