import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../../Redux/Actions';
import Products from './Products';

// STYLES
const HomeContainer = styled.main`
width: 1920px;
max-width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const ProductsMessage = styled.p`
font-size: 3rem;
font-weight: 700;
text-align: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
background: #ff4757;
padding: 1rem 4rem;
border-radius: 0.5rem;
color: #fff;
`;

const Home = () => {
    const dispatch = useDispatch();
    const products = useSelector( state => state.products );

    // GET PRODUCTS WITH REDUX
    useEffect( () => {
        dispatch( getProducts() );
        // eslint-disable-next-line
    }, [] );

    return (
        <HomeContainer>
            {products.loading ? (
                <ProductsMessage>در حال بارگذاری...</ProductsMessage>
            ) : products.error ? (
                <ProductsMessage>بارگذاری با مشکل مواجه شد !</ProductsMessage>
            ) : (
                <Products products={products.products} />
            )}
        </HomeContainer>
    )
}

export default Home
