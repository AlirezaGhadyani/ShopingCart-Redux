import React from 'react';
import styled from 'styled-components';
import { useField, ErrorMessage } from 'formik';

// Styles
const TextFieldWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const TextFildInp = styled.input`
width: 768px;
max-width: 95%;
background: #fff;
border-radius: 0.6rem;
padding: 0.6rem;
margin: .6rem 0;
font-family: faFont;
font-size: 1.4rem;
border: 2px solid #cacaca;
transition: all 0.5s ease;
:focus{
    border: 2px solid #ff4757;
    transition: all 0.5s ease;
}
::placeholder{
    font-family: faFont;
    font-weight: 600;
    color: #cacaca;
} 
`;

const FieldErrorMessage = styled.span`
width: 768px;
max-width: 95%;
font-size: 1.4rem;
font-weight: 700;
color: #e31e24;
`;

const TextField = ( { ...props } ) => {
    const [field] = useField( props );
    return (
        <TextFieldWrapper>
            <TextFildInp {...field} {...props} />
            <FieldErrorMessage>
                <ErrorMessage name={field.name} />
            </FieldErrorMessage>
        </TextFieldWrapper>
    )
}

export default TextField;
