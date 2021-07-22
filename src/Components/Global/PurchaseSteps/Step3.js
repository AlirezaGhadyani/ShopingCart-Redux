import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Step3Select from './Step3Select';
import { ConfirmStepWrapper } from './Step1';
import StepsMessage from './StepsMessage';

// STYLES
const UserInfoWrapper = styled.div`
position: relative;
width: 1024px;
max-width: 95%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2rem 0;
border: 2px solid #ededed;
border-radius: 0.4rem;
padding: 1rem;
& div{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media (max-width:594px){
    flex-direction: column;
    justify-content: center;
}
    & h1{
        font-size: 1.8rem;
        font-weight: 900;
    }
    & h2{
        font-size: 1.4rem;
        font-weight: 700;
    }
}

.address-txt{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin: 1rem 0 0 0;
    font-size: 1.4rem;
    font-weight: 700;
    @media (max-width:594px){
    justify-content: center;
}
}
`;

const Step3 = ( { setStep, setShowModal } ) => {
    const [showMessage, setShowMessage] = useState( false );
    const [selected, setSelected] = useState( 'نحوه ارسال را انتخاب کنید' );
    const userInfo = useSelector( state => state.userInfo.userStepInfo );

    // HANDLE CLICK NEXT
    const handleClickNext = () => {
        setStep( {
            step1: false,
            pass1: true,
            step2: false,
            pass2: true,
            step3: true,
            pass3: true
        } );
        setShowMessage( true );
        setInterval( () => setShowMessage( false ), 3000 );
    }

    return (
        <>
            <UserInfoWrapper>
                {userInfo && (
                    <>
                        <div>
                            <h1>{`نام گیرنده : ${userInfo.fullName}`}</h1>
                            <h2>{`تلفن : ${userInfo.mobile}`}</h2>
                        </div>
                        <h2 className="address-txt">{`آدرس : ${userInfo.address}`}</h2>
                    </>
                )}
            </UserInfoWrapper>
            <Step3Select selected={selected} setSelected={setSelected} />
            <ConfirmStepWrapper>
                <button
                    onClick={handleClickNext}>
                    بعدی
                </button>
                <button onClick={() => setStep( {
                    step1: false,
                    pass1: true,
                    step2: true,
                    pass2: false,
                    step3: false,
                    pass3: false
                } )}>قبلی</button>
            </ConfirmStepWrapper>
            {showMessage && (
                <StepsMessage setShowMessage={setShowMessage} />
            )}
        </>
    )
}

export default Step3
