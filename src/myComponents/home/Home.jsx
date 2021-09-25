import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import Courses from './Courses';


import { products } from '../constants/data.js';
import {useDispatch, useSelector} from 'react-redux';
// import { getProducts as listProducts } from '../../redux/actions/productActions';

import { Box,makeStyles } from '@material-ui/core';

const useStyle =makeStyles({
    component:{
        marginTop:-30,
        padding:10,
        background:'#F2F2F2'
    }
})

const Home = () => {
    const classes = useStyle();

    // const {products} = useSelector(state => state.getProducts);

    // const dispatch = useDispatch();
    
    // useEffect(()=>{
    //     dispatch(listProducts())
    // },[dispatch])

    return (
        <>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <Slide products={products}/>
                <Courses />
            </Box>
        </>
    )
}

export default Home;
