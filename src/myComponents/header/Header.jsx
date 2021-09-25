import React from 'react'
import { AppBar,Toolbar, makeStyles, withStyles,Box, IconButton,Drawer, List, ListItem } from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import { useState } from 'react';

import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';

const useStyle = makeStyles(theme =>({
    header:{
       background:'#2874f0',
       height:55
    },
    logo:{
        width:172,
        marginTop:-12,
        marginLeft: -25
    },
    list:{
        width:150
    },
    menuButton:{
        display:'none',
        [theme.breakpoints.down('sm')]:{
            display:'block',
            marginLeft:140
        },
    },
    headerButtons:{
        margin: '0 0% 0 auto',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }
}));

const ToolBar = withStyles({
    root:{
        minHeight:55
    }
})(Toolbar);

const Header = () => {
    const classes= useStyle();

    const [open,setOpen] = useState(false);

    const handleClose =()=>{
        setOpen(false);
    }

    const handleOpen =()=>{
        setOpen(true);
    }

    const list =()=>{
        return (
        <Box className={classes.list} onClick={handleClose}>
            <List>
                <ListItem >
                    <HeaderButtons />
                </ListItem>
            </List>
        </Box>
        )
    }

    return (
        <AppBar className={classes.header}>
            <ToolBar>
            <img src={process.env.PUBLIC_URL + '/images/shoponline.png'}  className={classes.logo}/>
                 <SearchBar />
                 <span className={classes.headerButtons}><HeaderButtons /></span>
                <IconButton 
                    color="inherit"
                    className={classes.menuButton}
                    onClick={handleOpen}
                >
                    <Menu />
                </IconButton>

                <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>

                 
            </ToolBar>
        </AppBar>
    )
}

export default Header;
