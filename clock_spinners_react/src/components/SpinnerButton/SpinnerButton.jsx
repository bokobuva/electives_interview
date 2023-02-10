import React from 'react';
import './SpinnerButton.css';

const SpinnerButton = ({ content, bgColor, onClick }) => {
    return (
        <button className='button' onClick={onClick} style={{ backgroundColor: bgColor }}>{content}</button>
    );
}
 
export default SpinnerButton;