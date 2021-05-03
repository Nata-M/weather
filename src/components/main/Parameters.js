import React from 'react';
import './Main.css';

const Parameters = (props) => {
    const { text, num, icon } = props
    return (
        <div className='parameters'>
            <p>{text}</p>
            <p>{num} {icon !== null ? icon : null}</p>
        </div>
    )
}

export default Parameters