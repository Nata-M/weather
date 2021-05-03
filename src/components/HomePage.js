import React from 'react';
import './HomePage.css';
import Header from './header/Header';
import Main from './main/Main';

const HomePage = (props) => {
    return (
        <div className='HomePage'>
            <Header />
            <Main />
        </div>
    )
}

export default HomePage