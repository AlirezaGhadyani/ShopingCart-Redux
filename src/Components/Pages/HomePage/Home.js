import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../../Redux/Actions';

// STYLES

const Home = () => {
    const dispatch = useDispatch();

    // GET PRODUCTS WITH REDUX
    useEffect( () => {
        dispatch( getProducts() );
    }, [] );

    return (
        <div>

        </div>
    )
}

export default Home
