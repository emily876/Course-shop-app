import {Box,Grid, Table, TableBody, TableCell, TableRow, Typography,makeStyles} from '@material-ui/core';
import {LocalOffer  as Badge} from '@material-ui/icons';
import clsx from 'clsx';

import ActionItems from "./ActionItems";

const useStyle = makeStyles(theme=>({
    component:{
        marginTop:55,
        background:'#f2f2f2'
    },
    container:{
        marginBottom:50,
        margin: '0 80px',
        background : '#fff',
        display:'flex',
        [theme.breakpoints.down('md')]:{
            padding:20,
            margin:-10,
            display:'flex',
            flexDirection:'column'
        }
    },
    rightContainer:{
        marginTop:50,
        minWidth:'50%',
        '& > *':{
            marginTop:10
        }
    },
    smallText:{
        marginBottom:30,
        verticalAlign:'baseline',
        fontSize:14,
        '& > *':{
            fontSize:14,
            marginTop:10
        }
    },
    greyTextColor:{
        color:'#878787'
    },
    price:{
        fontSize:28
    },
    badge:{
        fontSize:14,
        marginRight:10,
        color:'#00CC00'
    },
    image:{
        padding:'15px 20px',
        border: '1px solid #f0f0f0',
        width:'95%',
        [theme.breakpoints.down('md')]:{
            marginLeft:-40
        }
    },
}));

export const Product3 = () => {

    const classes = useStyle();

    const date = new Date (new Date().getTime() + (5*24*60*60*1000));

    return (
        <Box className={classes.component}> 
                <Box className={classes.container}>
                    <Box style={{minWidth: '35%',marginLeft:80,marginTop:30}}>
                    <img src="https://engineering.fb.com/wp-content/uploads/2015/06/1522635669452_11.jpg" className={classes.image}/>
                        <ActionItems />
                    </Box>
                    <Box className={classes.rightContainer}>
                        <Typography>Beginning C++ Programming - From Beginner to Beyond</Typography>
                        <Box style={{display:'flex'}}>
                        <Typography className={clsx(classes.smallText, classes.greyTextColor)}>8 Ratings and 1 Review</Typography>
                        <span><img src={process.env.PUBLIC_URL + '/images/tag.jpg'} style={{ width: 60, marginLeft: 10 }} /></span></Box>
                        <Typography>
                            <span className={classes.price}>₹3264</span> &nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹9600</strike></span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{color:'#388E3C'}}>66% off</span>
                        </Typography>
                        <Typography style={{marginTop:20, fontWeight:600}}>Available offers</Typography>
                        <Box className={classes.smallText}>
                            <Typography><Badge className={classes.badge} />Bank Offer10% off on Citi Credit Cards, up to ₹1500. On orders of ₹5000 and above</Typography>
                            <Typography><Badge className={classes.badge} />Bank Offer10% off on Kotak Bank Credit Cards, up to ₹1500. On Orders of ₹5000 and above</Typography>
                            <Typography><Badge className={classes.badge} />Bank Offer10% off on Citi Debit Cards, up to ₹750. On orders of ₹5000 and above</Typography>
                            <Typography><Badge className={classes.badge} />Special PriceGet extra 10% off (price inclusive of discount)</Typography>
                        </Box>
                        <Table>
                            <TableBody>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                    <TableCell className={classes.smallText}>
                                        <span style={{color:'#2874f0'}}>BookStore</span>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Description</TableCell>
                                    <TableCell>Obtain Modern C++ Object-Oriented Programming (OOP) and STL skills. C++14 and C++17 covered. C++20 info see below.
                                    C is still in use because it is slightly faster and smaller than C++. For most people, C++ is the better choice. It has more 
                                    features, more applications, and for most people, learning C++ is easier. C is still relevant, and learning to program in C 
                                    can improve how you program in C++.
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
       </Box>
    )
}