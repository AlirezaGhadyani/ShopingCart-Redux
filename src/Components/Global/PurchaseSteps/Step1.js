import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// STYLES
const CartListWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`;

const CartListItem = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
margin: 0.8rem 0;
direction: ltr;
& span{
    font-size: 1.4rem;
    font-weight: 700;
    background: #ff4757;
    color: #fff;
    padding: 0.2rem 1.2rem;
    border-radius: 0.3rem;
    :last-child{
        font-family: Quicksand;
        margin-left: 2rem;
    }
}
& img{
    width: 4rem;
    margin: 0 2rem;
}
& p{
    font-size: 1.4rem;
    font-weight: 700;
    font-family: Quicksand;
    direction: ltr;
}
`;

export const ConfirmStepWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
margin: 2rem 0;
& button{
    border: 0;
    background: #ff4757;
    padding: 0.4rem 2rem;
    border-radius: 0.3rem;
    margin: 0 0.5rem;
    cursor: pointer;
    font-family: faFont;
    font-weight: 600;
    color: #fff;
    font-size: 1.6rem;
    box-shadow: 0 0 15px rgba(0,0,0,0.3);
    transition: box-shadow 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        box-shadow: 0 10px 15px rgba(0,0,0,0.3);
        transition: box-shadow 0.5s ease;
    }
}
`;

const Step1 = ( { setStep } ) => {
    const CartItems = useSelector( state => state.cart );
    let history = useHistory();

    return (
        <>
            <CartListWrapper>
                {CartItems.items.map( item => (
                    <CartListItem key={item.id}>
                        <span>{`${item.qty} عدد`}</span>
                        <img src={item.image} />
                        <p>{item.title.length > 20 ? `${item.title.slice( 0, 25 )}...` : item.title}</p>
                        <span>{`${( item.price * item.qty ).toFixed( 2 )} $`}</span>
                    </CartListItem>
                ) )}
            </CartListWrapper>
            <ConfirmStepWrapper>
                <button onClick={() => setStep( {
                    step1: false,
                    pass1: true,
                    step2: true,
                    pass2: false,
                    step3: false,
                    pass3: false
                } )}>
                    بعدی
                </button>
                <button onClick={() => history.push( '/Cart' )}>قبلی</button>
            </ConfirmStepWrapper>
        </>
    )
}

export default Step1;
