import React from 'react';
import './Button.scss';
const Button = (props) => {
    const { text, className , isSmallButton} = props;
    return (
        <div id='button'>
            <button type={"button"} className={`mt-2 button ${isSmallButton ? 'smallButton' : ''}`}>{text}</button>
        </div>
    );
};

export default Button;
