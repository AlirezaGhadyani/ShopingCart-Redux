import React from 'react';
import styled from 'styled-components';

// STYLES
const ProductCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-family: Quicksand;
`;

const CardImg = styled.img`
width: 100%;
height: 18rem;
object-fit: contain;
`;

const CardTitle = styled.p`
font-size: 1.2rem;
font-weight: 700;
text-align: center;
direction: ltr;
margin: 1rem 0;
color: #2c3e50;
`;

const CardPricCatWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

const PriceCatBadge = styled.span`
font-size: 1rem;
font-weight: 700;
padding: 0.3rem 0.8rem;
border: 1px solid #ff4757;
border-radius: 0.4rem;
direction: ltr;
color: #ff4757;
:nth-child(2){

}
`;

const AddCartBtn = styled.button`
width: 100%;
background: #ff4757;
border: 0;
font-family: faFont;
font-size: 1.6rem;
color: #fff;
padding: 0.4rem 1.2rem;
margin: 1rem 0;
border-radius: 0.4rem;
cursor: pointer;
`;

const Product = ( { product } ) => {
    const { image, title, price, category: cat } = product;
    return (
        <ProductCard>
            <CardImg src={image} />
            <CardTitle>{title.length > 20 ? `${title.slice( 0, 25 )}...` : title}</CardTitle>
            <CardPricCatWrapper>
                <PriceCatBadge>{`$ ${price}`}</PriceCatBadge>
                <PriceCatBadge>{cat}</PriceCatBadge>
            </CardPricCatWrapper>
            <AddCartBtn>اضافه به سبد خرید</AddCartBtn>
        </ProductCard>
    )
}

export default Product
