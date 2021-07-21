import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, removeSingleProduct, addToCart } from '../../../Redux/Actions';
import { ProductsMessage } from '../../Pages/HomePage/Home';
import { AddCartBtn } from '../../Pages/HomePage/Product';

// STYLES
const ProductContainer = styled.main`
width: 1366px;
max-width: 100%;
padding: 0 1.8rem;
margin: 4rem 0;
display: flex;
justify-content: center;
align-items: center;
`;

const ProductWrapper = styled.section`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
@media (max-width:768px){
    flex-direction: column;
}
`;

const ProductImageWrapper = styled.div`
width: 580px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width:768px){
    width: 20rem;
}
`;

const ProductImage = styled.img`
width: 100%;
`;

const ProductInfoWrapper = styled.div`
width: calc(1920px - 680px);
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-end;
font-family: Quicksand;
padding: 0 2rem 0 0;
@media (max-width:768px){
    width: 100%;
    padding: 0;
    margin: 2rem 0;
}
`;

const ProductTitle = styled.p`
font-size: 1.8rem;
font-weight: 700;
color: #2c3e50;
direction: ltr;
`;

const ProductDesc = styled.p`
font-size: 1.3rem;
font-weight: 700;
color: #7f8c8d;
direction: ltr;
@media (max-width:882px){
    font-size: 1.1rem;
}
`;

const ProductPriceCatWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 2rem 0 1rem 0;
@media (max-width:882px){
    margin: 1rem 0 0.2rem 0;
}
@media (max-width:768px){
    margin: 2rem 0 1rem 0;
}
`;

const ProductPriceBadge = styled.span`
font-size: 1.4rem;
font-weight: 700;
border: 1px solid #ff4757;
border-radius: 0.3rem;
color: #ff4757;
padding: 0.6rem 1.6rem;
`;

const SingleProduct = ( { match } ) => {
    const productId = match.params.product.slice( 0, match.params.product.indexOf( 'p' ) );
    const dispatch = useDispatch();
    const product = useSelector( state => state.singleProduct );

    // FETCH SELECTED PRODUCT
    useEffect( () => {
        dispatch( getProduct( productId ) );
        return () => {
            dispatch( removeSingleProduct() );
        }
    }, [] );

    // HANDLE ADD TO CART
    const handleAddToCart = ( product ) => {
        dispatch( addToCart( product ) );
    };

    const { category: cat, description: desc, image, title, price } = product.item;

    return (
        <>
            {product.loading ? (
                <ProductsMessage>در حال بارگذاری...</ProductsMessage>
            ) : product.error ? (
                <ProductsMessage>بارگذاری با مشکل مواجه شد !</ProductsMessage>
            ) : (
                <ProductContainer>
                    <ProductWrapper>
                        <ProductImageWrapper>
                            <ProductImage src={image} />
                        </ProductImageWrapper>

                        <ProductInfoWrapper>
                            <ProductTitle>{title}</ProductTitle>
                            <ProductDesc>{desc}</ProductDesc>
                            <ProductPriceCatWrapper>
                                <ProductPriceBadge>{`$${price}`}</ProductPriceBadge>
                                <ProductPriceBadge>{cat}</ProductPriceBadge>
                            </ProductPriceCatWrapper>
                            <AddCartBtn font="2rem" padd="0.6rem" onClick={() => handleAddToCart( product.item )}>اضافه به سبد خرید</AddCartBtn>
                        </ProductInfoWrapper>
                    </ProductWrapper>
                </ProductContainer>
            )}
        </>
    )
}

export default SingleProduct
