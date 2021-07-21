import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import TextField from './Step2TextField';
import { ConfirmStepWrapper } from './Step1';
import { useDispatch } from 'react-redux';
import { getUserStepInfo } from '../../../Redux/Actions';

// STYLES
const InfoFormWrapper = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2rem 0;
& form{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validate = yup.object( {
    fullName: yup.string()
        .max( 34, 'حداکثر تعداد کاراکتر ورودی 34 میباشد' )
        .required( 'لطفا نام کامل خود را وارد کنید' ),
    address: yup.string()
        .required( 'لطفا آدرس خود را وارد کنید' ),
    mobile: yup.string()
        .max( 11, 'حداکثر تعداد کاراکتر ورودی 11 میباشد' )
        .min( 11, 'حداقل تعداد کاراکتر ورودی 11 میباشد' )
        .matches( phoneRegExp, 'لطفا یک شماره تلفن معتبر وارد کنید' )
        .required( 'لطفا شماره تلفن خود را وارد کنید' ),
} );

const Step2 = ( { setStep } ) => {
    const dispatch = useDispatch();

    // HANDLE SUBMIT INFORMATION
    const handleSubmit = ( values ) => {
        setStep( {
            step1: false,
            pass1: true,
            step2: false,
            pass2: true,
            step3: true,
            pass3: false
        } );
        dispatch( getUserStepInfo( values ) );
    }

    return (
        <InfoFormWrapper>
            <Formik
                initialValues={{
                    fullName: '',
                    address: '',
                    mobile: ''
                }}
                validationSchema={validate}
                onSubmit={handleSubmit}>
                {formik => (
                    <Form>
                        <TextField
                            placeholder="نام و نام خانوادگی خود را وارد کنید"
                            name="fullName"
                            type="text" />
                        <TextField
                            placeholder="آدرس خود را وارد کنید"
                            name="address"
                            type="text" />
                        <TextField
                            placeholder="شماره تلفن خود را وارد کنید"
                            name="mobile"
                            type="tel" />
                        <ConfirmStepWrapper>
                            <button>
                                بعدی
                            </button>
                            <button onClick={() => setStep( {
                                step1: true,
                                pass1: false,
                                step2: false,
                                pass2: false,
                                step3: false,
                                pass3: false
                            } )}>قبلی</button>
                        </ConfirmStepWrapper>
                    </Form>
                )}
            </Formik>
        </InfoFormWrapper>
    )
}

export default Step2
