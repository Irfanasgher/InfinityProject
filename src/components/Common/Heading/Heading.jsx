import React, { Component } from 'react';
import './Heading.scss';
const Heading = (props) => {
    const { text, className, para } = props;
    return (
        <div id='heading' className={'text-center'}>
            <h2 className={`m-2 mt-5 ${className}`}>
                 {text}
            </h2>
            <p>{para}</p>
        </div>
    );
};

export default Heading;
