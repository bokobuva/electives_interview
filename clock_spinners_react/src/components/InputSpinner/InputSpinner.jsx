import React, { forwardRef, useEffect } from 'react';
import SpinnerButton from '../SpinnerButton/SpinnerButton';
import './InputSpinner.css';

const InputSpinner = forwardRef(({ valueHandler, min, max, title }, ref) => {
    return (
        <>
            <h4>{title}</h4>
            <div className='input-spinner-container'>
                <SpinnerButton content='-' bgColor={parseInt(ref.current.value) > min ? 'green' : 'red'} onClick={() => valueHandler('-', ref, min, max)} />
                <input type='text' ref={ref} defaultValue={0}/>
                <SpinnerButton content='+' bgColor={parseInt(ref.current.value) < max ? 'green' : 'red'} onClick={() => valueHandler('+', ref, min, max)} />
            </div>
        </>
    );
})

export default InputSpinner;