import React from 'react';
import { navData } from '../constants/data';
import {Box, Typography,makeStyles} from '@material-ui/core';

const useStyle= makeStyles(theme =>({
    component:{
        display:'flex',
        margin:'55px 10px',
        justifyContent:'space-between',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]:{
            margin:0
        }
    },
    container:{
        textAlign:'center'
    },
    image:{
        height:120,
        width:200,
        marginTop:20
    },
    text:{
        fontSize:14,
        fontWeight:600
    }
}));

const NavBar = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            { 
            //  to use variable in tag or component, we need to do this under curly braces
               navData.map(data =>(
                   <Box className={classes.container}>
                       {/* need to wrap both below ,under box to return as 1 */}
                       <img className={classes.image} src={data.url} />
                       <Typography className={classes.text} >{data.text}</Typography>
                   </Box>
               ))
            }
        </Box>
    )
}

export default NavBar ;