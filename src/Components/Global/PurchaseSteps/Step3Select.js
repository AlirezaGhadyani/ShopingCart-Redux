import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowDropDown } from 'react-icons/md';

// STYLES
const SelectContainer = styled.div`
width: 1024px;
max-width: 95%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 1.6rem;
font-family: faFont;
`;

const SelectSelectedWrapp = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0.5rem 0.6rem;
border: 2px solid #ededed;
border-radius: 0.4rem;
cursor: pointer;
user-select: none;
`;

const SelectCuntentWrapp = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
margin: 0.4rem 0 2rem 0;
border: 2px solid #ededed;
border-radius: 0.4rem;
`;

const SelectItems = styled.div`
width: 100%;
padding: 0.5rem 0.6rem;
cursor: pointer;
transition: all 0.2s ease;
:hover{
    background: #f5f5f5;
    transition: all 0.2s ease;
}
`;

const options = ['پست پیشتاز', 'پست معمولی', 'تیپاکس', 'اسنپ بایک'];

const Step3Select = ( { selected, setSelected } ) => {
    const [active, setActive] = useState( false );

    // HANDLE CLICK OPTIPON ITEM
    const handleClickItem = ( option ) => {
        setSelected( option );
        setActive( false );
    }

    return (
        <SelectContainer>
            <SelectSelectedWrapp onClick={() => setActive( p => !p )}>
                <span>{selected}</span>
                <MdArrowDropDown />
            </SelectSelectedWrapp>
            {active && (
                <SelectCuntentWrapp>
                    {options.map( ( option, index ) => (
                        <SelectItems key={index} onClick={() => handleClickItem( option )}>{option}</SelectItems>
                    ) )}
                </SelectCuntentWrapp>
            )}
        </SelectContainer>
    )
}

export default Step3Select
