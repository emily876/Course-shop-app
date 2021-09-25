import { Card, makeStyles, Box, Typography, Button } from '@material-ui/core';
import clsx from 'clsx';
import GroupButton from './GroupButton';

const useStyle = makeStyles({
    component: {
        borderTop: '1px solid #f0f0f0',
        borderRadius: 0,
        display: 'flex'
    },
    leftComponent: {
        margin: 20, 
        display: 'flex',
        flexDirection: 'column'
    },
    image: {
        height: 150,
        width: 250
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
    },
    remove: {
        marginTop: 20,
        fontSize: 16
    }
});

const CartItem = ({ item, removeItemFromCart }) => {
    console.log(item)
    const classes = useStyle();

    return (
        <>
        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src="https://s3.amazonaws.com/coursesity-blog/2020/07/data-structure-algorithm-courses.png" className={classes.image}/>
                <GroupButton />
            </Box>
            <Box className={classes.mid}>
                <Typography>Mastering Data Structures & Algorithms using C and C++</Typography>
                <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{ marginTop: 10 }}> Seller: RetailNet
                    <span><img src={process.env.PUBLIC_URL + '/images/tag.jpg'} style={{ width: 60, marginLeft: 10 }} /></span>
                </Typography>
                <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>₹4049</span>&nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>₹6999</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>42% off</span>
                </Typography>
                <Button className={classes.remove}>Remove</Button>
            </Box>
        </Card>

        <Card className={classes.component}>
            <Box className={classes.leftComponent}>
                <img src="https://miro.medium.com/max/700/1*C3kxjCrJy-aWSMpe2chfaA.png" className={classes.image}/>
                <GroupButton />
            </Box>
            <Box className={classes.mid}>
                <Typography>The Complete React Native + Hooks Course</Typography>
                <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{ marginTop: 10 }}>Seller:RetailNet
                    <span><img src={process.env.PUBLIC_URL + '/images/tag.jpg'} style={{ width: 60, marginLeft: 10 }} /></span>
                </Typography>
                <Typography style={{margin: '20px 0'}}>
                    <span className={classes.price}>₹2835</span>&nbsp;&nbsp;&nbsp;
                    <span className={classes.greyTextColor}><strike>₹5250</strike></span>&nbsp;&nbsp;&nbsp;
                    <span style={{ color: '#388E3C' }}>46% off</span>
                </Typography>
                <Button className={classes.remove}>Remove</Button>
            </Box>
        </Card>
        </>
    )
}

export default CartItem;