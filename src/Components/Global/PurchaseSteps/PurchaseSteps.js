import Reac, { useState } from 'react';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

// STYLES
const PurchaseStepsContainer = styled.main`
width: 1920px;
max-width: 100%;
padding: 0 1.8rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const StepsLineWrapper = styled.section`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
direction: ltr;
margin: 2rem 0;
`;

const StepSection = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
& svg{
    font-size: 2rem;
    color: ${props => props.color};
}
& span{
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.color};
}
`;

const StepLine = styled.div`
width: 14rem;
height: 0.1rem;
background: #cacaca;
margin: 0 0.5rem 3rem 0;
`;

const PurchaseSteps = () => {
    const [step, setStep] = useState( {
        step1: true,
        pass1: false,
        step2: false,
        pass2: false,
        step3: false,
        pass3: false
    } );

    return (
        <PurchaseStepsContainer>
            <StepsLineWrapper>
                <StepSection color={step.pass1 ? '#2ecc71' : '#cacaca'}>
                    <FaCheckCircle />
                    <span>تایید سبد خرید</span>
                </StepSection>
                <StepLine />
                <StepSection color={step.pass2 ? '#2ecc71' : '#cacaca'}>
                    <FaCheckCircle />
                    <span>ثبت اطلاعات گیرنده</span>
                </StepSection>
                <StepLine />
                <StepSection color={step.pass3 ? '#2ecc71' : '#cacaca'}>
                    <FaCheckCircle />
                    <span>نحوه ارسال</span>
                </StepSection>
            </StepsLineWrapper>
            {step.step1 ? (
                <Step1 setStep={setStep} />
            ) : step.step2 ? (
                <Step2 setStep={setStep} />
            ) : step.step3 ? (
                <Step3 setStep={setStep} />
            ) : null}
        </PurchaseStepsContainer>
    )
}

export default PurchaseSteps
