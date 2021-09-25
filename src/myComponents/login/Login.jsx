import {useState,useEffect} from 'react';
import { Box, Button, Dialog,DialogContent,makeStyles, TextField, Typography } from '@material-ui/core';
import { authenticateSignup , authenticateLogin} from '../../service/api';

const useStyle = makeStyles(theme=>({
    component:{
        height:'66.30vh',
        width:'90vh',
        [theme.breakpoints.down('sm')]: {
            marginLeft:-80,
            width:'65vh',
            height:'80vh',
        }
    },
    image:{
        backgroundImage:`url(${'https://images.unsplash.com/photo-1544185310-0b3cf501672b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80'})`,
        height: 500,
        backgroundRepeat:'no-repeat',
        width:'40%',
        backgroundPosition:'center',
        padding:'45px 35px',
        '& > *':{
            color:'white',
            fontWeight:600
        },
        [theme.breakpoints.down('sm')]: {
          visibility:'hidden',
          width:1
        }
    },
    login:{
        padding:'5px 35px',
        display:'flex',
        flex:1,
        flexDirection:'column',
        '& > *':{
            marginTop:20
        }
    },
    text:{
        color:'#878787',
        fontSize:12
    },
    loginBtn:{
        textTransform:'none',
        background:'#fb641b',
        color:'#ffffff',
        height:48,
        borderRadius:2
    },
    requestBtn:{
        textTransform:'none',
        background:'#ffffff',
        color:'#2874f0',
        height:48,
        borderRadius:2,
        boxShadow:'0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    createText:{
        textAlign:'center',
        marginTop:'auto',
        marginBottom:20,
        fontSize:14,
        color:'#2874f0',
        fontWeight:600,
        cursor:'pointer'
    },
    error:{
        fontSize:10,
        color:'red',
        marginTop:10,
        fontWeight:600,
        lineHeight:0
    }
}));

const initialValue ={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get fast and easy access to all our courses'
    },
    signup:{
        view:'signup',
        heading:'It looks like you are new here!',
        subHeading:'Sign up with your mobile number and all other details to get started'
    }
}

const signupInitialValues ={
    firstname : '',
    lastname  : '',
    username  : '',
    email : '',
    password : '',
    phone : ''
}

const loginInitialValues ={
    username:'',
    password : ''
}

const Login = ({open,setOpen , setAccount}) => {
    const classes = useStyle();

    const [ account , toggleAccount] = useState(initialValue.login);
    const [ signup , setSignup] = useState(signupInitialValues);
    const [ login , setLogin] = useState(loginInitialValues);
    const [ error , setError] = useState(false);

    useEffect(() => {
        setError(false);
    }, [login])

    const handleClose =()=>{
        setOpen(false);
        toggleAccount(initialValue.login);
    }

    const toggleUserAccount =()=>{
        toggleAccount(initialValue.signup);
    }

    const signupUser = async ()=>{
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.username)
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) 
        setError(true);
        else {
            setError(false);
            handleClose();
            setAccount(login.username);
        }
    }

    const onInputChange =(e)=>{
        setSignup({...signup,[e.target.name]: e.target.value});
        console.log(e);
    }

    const onValueChange =(e)=>{
        setLogin({...login,[e.target.name]: e.target.value});
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{display:'flex'}}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                    
                        <Box className={classes.login}>
                            <TextField onChange={(e)=> onValueChange(e)} name='username' label='Enter Email/Mobile number'/>
                            { error && <Typography className={classes.error}>Invalid username or password</Typography>}
                            <TextField onChange={(e)=> onValueChange(e)} name='password' label='Enter Password'/>
                            
                            <Typography className={classes.text}>By continuing, you agree to Shopline's Terms of Use and Privacy Policy.</Typography>
                            <Button variant="contained" onClick={()=> loginUser()} className={classes.loginBtn}>Login</Button>
                            <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                            <Button variant="contained" className={classes.requestBtn}>Request OTP</Button>
                            <Typography onClick={()=> toggleUserAccount()} className={classes.createText}>New to Shopline? Sign up to create an account</Typography>
                        </Box>
                        :
                        <Box className={classes.login}>
                            <TextField onChange={(e)=> onInputChange(e)} name='firstname' label='Enter your first name'/>
                            <TextField onChange={(e)=> onInputChange(e)} name='lastname' label='Enter your last name'/>
                            <TextField onChange={(e)=> onInputChange(e)} name='username' label='Enter username'/>
                            <TextField onChange={(e)=> onInputChange(e)} name='email' label='Enter Email'/>
                            <TextField onChange={(e)=> onInputChange(e)} name='password' label='Enter password'/>
                            <TextField onChange={(e)=> onInputChange(e)} name='phone' label='Enter Mobile number'/>
                            <Button variant="contained" onClick={()=> signupUser()} className={classes.loginBtn}>Sign Up</Button>
                        </Box> 
                     }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;
