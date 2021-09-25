import { Box, makeStyles, Typography, Button, Grid } from '@material-ui/core';
import HistoryCourse from './HistoryCourse';

const useStyle = makeStyles(theme => ({
    component: {
        // marginTop: 55,
        padding: '30px 105px',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            padding: '15px 0px',
            marginLeft:-120
        }
    },
    leftComponent: {
        marginLeft:160,
        [theme.breakpoints.down('sm')]: {
            marginBottom: 15
        }
    },
    header: {
        padding: '15px 24px',
        background: '#fff'
    }
}));

const Cart = () => {
    const classes = useStyle();

    return (
        <>
            <Grid container className={classes.component}>
                <Grid item lg={9} md={9} sm={12} xs={12} className={classes.leftComponent}>
                    <Box className={classes.header}>
                        <Typography style={{fontWeight: 600, fontSize: 18}}>My History (3)</Typography>
                    </Box>
                    {
                        <HistoryCourse />
                    }
                </Grid>
            </Grid>
        </>

    )
}

export default Cart;