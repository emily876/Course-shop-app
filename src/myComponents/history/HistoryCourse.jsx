import { Card, makeStyles, Box, Typography, Button } from '@material-ui/core';
import clsx from 'clsx';

const useStyle = makeStyles(theme=>({
    component: {
        borderTop: '1px solid #f0f0f0',
        borderRadius: 0,
        display: 'flex',
    },
    leftComponent: {
        margin: 20, 
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            marginRight:-5
        }
    },
    image: {
        height: 150,
        width: 250,
        [theme.breakpoints.down('sm')]: {
            width:200,
            height:130
        }
    },
    mid: {
        margin: 20
    },
    greyTextColor: {
        color: '#878787'
    },
    smallText: {
        fontSize: 14,
    },
    price: {
        fontSize: 18,
        fontWeight: 600
    }
}));

const HistoryCourse = ({ item}) => {
    console.log(item)
    const classes = useStyle();

    return (
        <>
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src="https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg" className={classes.image}/>
            </Box>
            <Box className={classes.mid}>
                <Typography>Machine Learning A-Z™: Hands-On Python & R In Data Science</Typography>
                <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{ marginTop: 10 }}> Seller: RetailNet
                    <span><img src={process.env.PUBLIC_URL + '/images/tag.jpg'} style={{ width: 60, marginLeft: 10 }} /></span>
                </Typography>
                <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>₹4580</span>&nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>₹8640</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>47% off</span>
                </Typography>
            </Box>
        </Card>

        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src="https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/what-is-mern-stack/Images/The%20MERN%20Stack.jpg" className={classes.image}/>
            </Box>
            <Box className={classes.mid}>
                <Typography>MERN Stack Front To Back: Full Stack React, Redux & Node.js</Typography>
                <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{ marginTop: 10 }}>Seller:RetailNet
                    <span><img src={process.env.PUBLIC_URL + '/images/tag.jpg'} style={{ width: 60, marginLeft: 10 }} /></span>
                </Typography>
                <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>₹3456</span>&nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>₹8640</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>60% off</span>
                </Typography>
            </Box>
        </Card>

        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src="https://img-c.udemycdn.com/course/240x135/764164_de03_2.jpg" className={classes.image}/>
            </Box>
            <Box className={classes.mid}>
                <Typography>The Complete Web Developer Course 2.0</Typography>
                <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{ marginTop: 10 }}>Seller:RetailNet
                    <span><img src={process.env.PUBLIC_URL + '/images/tag.jpg'} style={{ width: 60, marginLeft: 10 }} /></span>
                </Typography>
                <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>₹4800</span>&nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>₹8000</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>40% off</span>
                </Typography>
            </Box>
        </Card>

        </>
    )
}

export default HistoryCourse;
