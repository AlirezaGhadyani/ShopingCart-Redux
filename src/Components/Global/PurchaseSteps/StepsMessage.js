import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

// STYLES
const MessageBox = styled.div`
position: absolute;
bottom: 0%;
left: 50%;
transform: translate(-50%,-50%);
width: 768px;
max-width: 95%;
padding: 1rem 1.8rem;
font-size: 1.8rem;
color: #fff;
background: #2ecc71;
border-radius: 0.4rem;
text-align: center;
box-shadow: 0 0 15px rgba(0,0,0,0.3);
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
@media (max-width:505px){
    font-size: 1.4rem;
}
@media (max-width:390px){
    font-size: 1.1rem;
}
& svg{
    cursor: pointer;
}
`;

const StepsMessage = ( { setShowMessage } ) => {
    return (
        <MessageBox>
            ثبت سفارش شما با موفقیت انجام شد.
            <FaTimes onClick={() => setShowMessage( false )} />
        </MessageBox>
    )
}

export default StepsMessage
