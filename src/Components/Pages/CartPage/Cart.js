import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { getTotalPrice } from '../../../Redux/Actions';
import { FaShoppingBasket } from 'react-icons/fa';

// STYLES
const CartContainer = styled.main`
width: 1920px;
max-width: 100%;
padding: 0 1.8rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const EmptyCartMessage = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
& p{
    font-size: 3rem;
    font-weight: 700;
}
& svg{
    font-size: 8rem;
    color: #ff4757;
}
`;

const CartTitle = styled.h1`
width: 100%;
text-align: center;
font-size: 3rem;
font-weight: 700;
margin: 2rem 0;
padding-bottom: 1.4rem;
border-bottom: 2px solid #ff4757;
`;

const CartStatusWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin: 4rem 0;
padding: 2rem 0;
border-top: 2px solid #ff4757;
@media (max-width:768px){
    flex-direction: column;
    justify-content: center;
}
`;

const CartStatusTxt = styled.h2`
font-size: 2rem;
font-weight: 600;
& span{
    direction: ltr;
    font-family: Quicksand;
}
`;

const CartFinalBuyBtn = styled.button`
background: #ff4757;
border: 0;
border-radius: 0.4rem;
padding: 0.6rem 2rem;
cursor: pointer;
font-size: 1.6rem;
font-family: faFont;
font-weight: 700;
color: #fff;
@media (max-width:768px){
    order: 3;
    width: 100%;
    margin: 1rem 0;
}
`;

const CartItemWrapper = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const Cart = () => {
    const dispatch = useDispatch();
    let history = useHistory();

    // GET CART ITEMS
    const cart = useSelector( state => state.cart );
    const { items, totalPrice, totalQty } = cart;

    // SET TOTAL PRICE
    useEffect( () => {
        if ( cart.items.length !== 0 ) {
            const totalPrice = cart.items
                .map( item => item.price * item.qty )
                .reduce( ( acc, curr ) => acc + curr );
            dispatch( getTotalPrice( totalPrice ) );
            // eslint-disable-next-line
        }
    }, [totalQty, cart.items, dispatch] );

    return (
        <CartContainer>
            {totalQty !== 0 ? (
                <>
                    <CartTitle>?????? ???????? ????</CartTitle>
                    <CartItemWrapper>
                        {items.map( Item => (
                            <CartItem itemData={Item} key={Item.id} />
                        ) )}
                    </CartItemWrapper>
                    <CartStatusWrapper>
                        <CartFinalBuyBtn onClick={() => history.push( '/Cart/PurchaseSteps' )}>
                            ?????????? ???????? ????????
                        </CartFinalBuyBtn>
                        <CartStatusTxt>?????????? ???? : <span>{totalQty}</span></CartStatusTxt>
                        <CartStatusTxt>???????? ???? : <span>{`${totalPrice.toFixed( 2 )}$`}</span></CartStatusTxt>
                    </CartStatusWrapper>
                </>
            ) : (
                <EmptyCartMessage>
                    <FaShoppingBasket />
                    <p>?????? ???????? ?????? ???????? ?????? !</p>
                </EmptyCartMessage>
            )}

        </CartContainer>
    )
}

export default Cart;
