import React from 'react';
import './Next.css';

const Card = (props) => {
  const { day, date, img, min, max } = props;

  return (
    <div className='card'>
      <p>{day}</p>
      <p>{date}</p>
      <img className='clouds-img' src={img} />
      <div className='temp'>
        <p>{Math.round(min)}&#176;</p>
        <p>{Math.round(max)}&#176;</p>
      </div>
    </div>
  )
}

export default Card