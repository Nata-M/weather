import React from 'react';
import './Header.css';
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
]
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
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