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

export const Course4 = () => {

    const classes = useStyle();

    const date = new Date (new Date().getTime() + (5*24*60*60*1000));

    return (
        <Box className={classes.component}> 
                <Box className={classes.container}>
                    <Box style={{minWidth: '35%',marginLeft:80,marginTop:30}}>
                    <img src="https://1.bp.blogspot.com/-TMtHnVZWzDw/X-Los-yfcCI/AAAAAAAAlGg/ixm2SNBo9YEJJTnOpR4SYlxpWegxQp_dwCLcBGAsYHQ/w1200-h630-p-k-no-nu/LEarn%2BSpring%2BSecurity%2Band%2BOAth%2Bby%2BBaeldung%2B-%2Bbest%2Bonline%2Bcourse.jpg" className={classes.image}/>
                        <ActionItems />
                    </Box>
                    <Box className={classes.rightContainer}>
                        <Typography>Spring framework start to end course</Typography>
                        <Box style={{display:'flex'}}>
                        <Typography className={clsx(classes.smallText, classes.greyTextColor)}>8 Ratings and 1 Review</Typography>
                        <span><img src={process.env.PUBLIC_URL + '/images/tag.jpg'} style={{ width: 60, marginLeft: 10 }} /></span></Box>
                        <Typography>
                            <span className={classes.price}>₹4580</span> &nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹8640</strike></span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{color:'#388E3C'}}>47% off</span>
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
                                    <TableCell>Spring Framework Master Class - Java Spring the Modern Way.Learn the magic of Java 
                                Spring Framework with Spring Boot, Spring JDBC, Spring AOP, Hibernate, JUnit & Mockito
                                You will learn the BASICS of Spring - Dependency Injection, IOC Container, Application Context and Bean Factory</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Box>
                </Box>
       </Box>
    )
}