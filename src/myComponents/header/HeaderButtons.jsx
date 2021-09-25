import {React,useState,useContext} from 'react';
import { Box, Button, makeStyles, Typography, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import LoginDialog from '../login/Login';
import { LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';

const useStyle = makeStyles(theme=>({
    login: {
        background: '#FFFFFF',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 10px',
        marginTop:3,
        boxShadow:'none',
        [theme.breakpoints.down('sm')]:{
            background: '#2874f0',
            color:'#ffffff'
        }
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {      // apply css to child elements from parent class using this method
            marginRight: 50,
            alignItems:'center',
            textDecoration:'none',
            color:'#fff',
            [theme.breakpoints.down('sm')]:{
                color:'#2874f0',
                alignItems:'center',
                display:'flex',
                flexDirection:'column',
                marginTop:10
            }
        },
        [theme.breakpoints.down('sm')]:{
            display:'block'
        }
    },
    container:{
        display:'flex',
        [theme.breakpoints.down('sm')]:{
            display:'flex',
            marginLeft:-10,
            marginTop:20
        }
    }
}));

const HeaderButtons = () => {
    const classes = useStyle();

    const [open,setOpen] = useState(false);
    // const {account, setAccount} = useContext(LoginContext);

    // const {cartItems} = useSelector(state => state.cart);

    const openLoginDialog = ()=>{
        setOpen(true);
    }

    return (
        <Box className={classes.wrapper}>
            {
                // account ? <Profile account={account} setAccount={setAccount} /> :
                <a>
                    <Button variant="contained" onClick={() => openLoginDialog()} className={classes.login}>Login/SignUp</Button>
                </a>
            }
            <a href="/profile" ><Typography style={{marginTop:8,cursor:'pointer'}}>Profile</Typography></a>
            <a href="/cart" className={classes.container}>
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{marginLeft:10}}>Cart</Typography>
            </a>
            <a href="/history" ><Typography style={{marginTop:8,cursor:'pointer'}}>History</Typography></a>

            <LoginDialog open={open} setOpen={setOpen} 
            // setAccount={setAccount}
            />
        </Box>
    )
}

export default HeaderButtons;
