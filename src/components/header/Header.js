import React from 'react';
import './Header.css';
import { weekdays, months } from '../date/Date';

const today = new Date();
const day = today.getDay();

console.log(today);

const Header = (props) => {
    return (
        <div className='Header'>
            {weekdays[day]}, {today.getDate()} {months[today.getMonth()]}, {today.getYear() + 1900}
        </div>
    )
}

export default Header