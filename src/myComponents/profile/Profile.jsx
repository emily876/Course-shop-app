import React from 'react';
import { makeStyles,Box, Typography ,Divider,TextField,FormControlLabel, Radio,RadioGroup} from '@material-ui/core';
import {LocalMall,CardGiftcard,PowerSettingsNew,KeyboardArrowRightOutlined} from '@material-ui/icons';

const useStyle =makeStyles(theme=>({
    component:{
        padding: '30px 180px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            display:'flex',
            flexDirection:'column',
            marginLeft:-150
        }
    },
    image:{
        background:'white',
        padding:'10px 5px',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        [theme.breakpoints.down('sm')]: {
            width:430
        }
    },
    allFont:{
        marginLeft:20,
        color:'grey',
        fontWeight:600,
        marginRight:120,
        marginTop:18,
    },
    logout:{
        background:'white',
        padding:'10px 5px',
        marginTop:10,
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        [theme.breakpoints.down('sm')]: {
            width:350,
            marginLeft:40
        }
    },
    info:{
        width:800,
        height:600,
        background:'white',
        marginLeft:10,
        padding:'30px 25px',
        boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
        [theme.breakpoints.down('sm')]: {
            marginLeft:-20,
            width:465
        }
    },
    box:{
        marginTop:25,
        display:'flex',
    },
    text:{
        color:'black',
        fontWeight:600
    },
    sideImg:{
        marginTop:2,
        [theme.breakpoints.down('sm')]: {
            marginLeft:40
        }
    },
    arrange:{
        marginTop:20,
    }
}));

const Profile = () => {
    const classes = useStyle();

        const [value, setValue] = React.useState('');
      
        const handleChange = (event) => {
          setValue(event.target.value);
        };

    return (
        <Box className={classes.component}>
            <Box>
            <Box className={classes.image}>
                <Box style={{display:'flex'}}><img style={{width:60}} src="https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-11-avatar-2754576_120520.png"/>
                <Typography className={classes.allFont} style={{color:'black'}}>Hey There !!</Typography>
                </Box>
            </Box>
            
            <Box className={classes.logout}>
                <a href="/history" style={{textDecoration:'none'}}>
                <Box style={{display:'flex'}}>
                <LocalMall  style={{marginTop:10, margin:10,color:'blue'}}/>
                <Typography className={classes.allFont} style={{marginTop:12,marginLeft:20}}> My Orders </Typography>
                <KeyboardArrowRightOutlined style={{marginTop:10,marginLeft:40,color:'grey'}}/>
                </Box></a>
                <Divider />
                <a href="/cart" style={{textDecoration:'none'}}>
                <Box style={{display:'flex'}}>
                <CardGiftcard  style={{marginTop:10, margin:12,color:'blue'}}/>
                <Typography className={classes.allFont} style={{marginTop:12,marginLeft:15}}> My Cart </Typography>
                <KeyboardArrowRightOutlined style={{marginTop:10,color:'grey',marginLeft:60}}/>
                </Box></a>
                <Divider />
                <a href="/" style={{textDecoration:'none'}}>
                <Box style={{display:'flex'}}>
                <PowerSettingsNew  style={{marginTop:15, margin:10,color:'blue'}}/>
                <Typography className={classes.allFont} style={{marginTop:14}}> Log Out</Typography>
                </Box>
                </a>
                
            </Box>
                <Box className={classes.sideImg}>
                    <img style={{width:350,marginTop:5}} src="https://miro.medium.com/max/800/1*mT39iprkcpxg4ff5rclJCw.png" />
                </Box>
            </Box>

            <Box className={classes.info}>
                <Typography className={classes.text}>Personal Information</Typography>
                <Box  className={classes.box}>
                <TextField style={{marginRight:15,width:300}} id="outlined-basic" label="First Name" variant="outlined" />
                <TextField style={{width:300}} id="outlined-basic" label="Last Name" variant="outlined" />
                </Box>

                <Typography className={classes.text} style={{marginTop:30}}>Your Gender</Typography>
                <Box style={{marginTop:10}}>
                <RadioGroup style={{display:'flex-column'}} row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                    <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                    <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
                </RadioGroup>
                </Box>

                <Typography className={classes.text} style={{marginTop:30}}>Email Address</Typography>
                <Box className={classes.arrange}>
                <TextField style={{marginRight:15,width:430}} id="outlined-basic" label="Email" variant="outlined" />
                </Box>

                <Typography className={classes.text} style={{marginTop:30}}>Mobile Number</Typography>
                <Box className={classes.arrange}>
                <TextField style={{marginRight:15,width:430}} id="outlined-basic" label="Phone" variant="outlined" />
                </Box>
            </Box>
        </Box>
    )
}

export default Profile;
